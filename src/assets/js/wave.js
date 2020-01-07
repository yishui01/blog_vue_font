let wave = function (canvas, settings) {
    // 默认设置
    var defaults = {
        image: "",
        dropRadius: 3,  // 波源半径大小
        delay: 1,
        attenuation: 5,
        maxAmplitude: 1024,
        sourceAmplitude: 512, // 震源振幅
        auto: !0
    }
    // 合并设置
    for (var item in defaults) {
        if (!settings.hasOwnProperty(item)) {
            settings[item] = defaults[item]
        }
    }
    // 检测背景图
    if (!settings.image.length) {
        return false
    }
    this.width = canvas.width
    this.height = canvas.height
    this.auto = settings.auto //随机水波
    this.dropRadius = settings.dropRadius// 波源半径大小
    this.delay = settings.delay * 1000// 波源震荡时间
    this.attenuation = settings.attenuation,  // 衰减级别
        this.maxAmplitude = settings.maxAmplitude  // 最大振幅
    this.sourceAmplitude = settings.sourceAmplitude// 震源振幅
    this.half_width = this.width >> 1
    this.half_height = this.height >> 1
    this.old_index = this.width
    this.new_index = this.width * (this.height + 3)
    this.map_index // 振幅数组索引
    this.texture   // 原始图像像素信息
    this.ripple    // 参数波纹的图像像素信息
    this.image  // Image对象
    this.imageUrl = settings.image  // Image对象
    this.autoRepeat // 自动产生波源的重复事件
    this.amplitude_size = this.width * (this.height + 2) * 2, // 振幅数组大小
        this.ripple_map = []  // 产生水波下一时刻振幅
    this.last_map = [] // 初始时刻振幅
    // 波幅数组初始化为0
    for (var i = 0; i < this.amplitude_size; i++) {
        this.ripple_map[i] = this.last_map[i] = 0
    }
    this.ctx = canvas.getContext('2d')//画笔
    this.ctx.fillStyle = settings.bgColor
    this.ctx.fillRect(0, 0, this.width, this.height)
}
wave.prototype.init = function () {
    this.image = new Image()
    this.image.crossOrigin = "*" //这句要设置在src设置之前（就是下面的这行代码），不然会报跨域
    this.image.src = this.imageUrl //这里要在设置跨域头之后设置
    this.image.style.width = this.width + 'px'
    this.image.style.height = this.height + 'px'
    let _this = this
    this.image.onload = function () {
        _this.cinit()
    }
}
// 计算下一时刻波幅，index为像素点位置，old_amplitude为上一时刻该点波幅
wave.prototype.calculAmplitude = function (index, old_amplitude) {
    var x_boundary = 0, judge = this.map_index % this.width;
    // 由于波幅数据顺序存储，加上左右边界检查，避免左边水波传递到右边
    if (judge == 0) {
        x_boundary = 1; // 左边边界
    } else if (judge == this.width - 1) {
        x_boundary = 2; // 右边边界
    }
    var top = this.ripple_map[index - this.width],// 上边的相邻点
        bottom = this.ripple_map[index + this.width],// 下边的相邻点
        left = x_boundary != 1 ? this.ripple_map[index - 1] : 0,// 左边的相邻点
        right = x_boundary != 2 ? this.ripple_map[index + 1] : 0;// 右边的相邻点
    // 计算当前像素点下一时刻的振幅
    var amplitude = top + bottom + left + right;
    amplitude >>= 1;
    amplitude -= old_amplitude;
    amplitude -= amplitude >> 5;  // 计算衰减
    return amplitude;
}
// 渲染下一帧
wave.prototype.renderRipple = function () {
    var i = this.old_index,
        deviation_x,  // x水平方向偏移
        deviation_y,  // y竖直方向偏移
        pixel_deviation, // 偏移后的ImageData对象像素索引
        pixel_source;  // 原始ImageData对象像素索引

    // 交互索引 old_index, new_index
    this.old_index = this.new_index;
    this.new_index = i;

    // 设置像素索引和振幅索引
    i = 0;
    this.map_index = this.old_index;

    // 渲染所有像素点
    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            // 计算当前像素点下一时刻的振幅
            var amplitude = this.calculAmplitude(this.map_index, this.ripple_map[this.new_index + i]);

            // 更新振幅数组
            this.ripple_map[this.new_index + i] = amplitude;

            amplitude = 1024 - amplitude;
            var old_amplitude = this.last_map[i];
            this.last_map[i] = amplitude;

            if (old_amplitude != amplitude) {
                // 计算偏移
                deviation_x = (((x - this.half_width) * amplitude / 1024) << 0) + this.half_width;
                deviation_y = (((y - this.half_height) * amplitude / 1024) << 0) + this.half_height;

                // 检查边界
                if (deviation_x > this.width) {
                    deviation_x = this.width - 1;
                }
                if (deviation_x < 0) {
                    deviation_x = 0;
                }
                if (deviation_y > this.height) {
                    deviation_y = this.height - 1;
                }
                if (deviation_y < 0) {
                    deviation_y = 0;
                }

                // 计算imageData中对应的像素RGBA偏移位置
                pixel_source = i * 4;
                pixel_deviation = (deviation_x + (deviation_y * this.width)) * 4;

                // 移动像素的RGBA信息，ripple和texture为背景图的ImageData对象
                this.ripple.data[pixel_source] = this.texture.data[pixel_deviation];
                this.ripple.data[pixel_source + 1] = this.texture.data[pixel_deviation + 1];
                this.ripple.data[pixel_source + 2] = this.texture.data[pixel_deviation + 2];
            }
            ++i;
            ++this.map_index;
        }
    }
    // 渲染处理之后的图像
    this.ctx.putImageData(this.ripple, 0, 0);
}
// 在指定地点产生波源
wave.prototype.disturb = function (circleX, circleY) {
    // 下面的移位运算可以将值向下取整
    circleX <<= 0;
    circleY <<= 0;
    var maxDistanceX = circleX + this.dropRadius,
        maxDistanceY = circleY + this.dropRadius;
    for (var y = circleY - this.dropRadius; y < maxDistanceY; y++) {
        for (var x = circleX - this.dropRadius; x < maxDistanceX; x++) {
            this.ripple_map[this.old_index + y * this.width + x] += 512;
        }
    }
}
wave.prototype.cinit = function () {
    this.saveImageData();
    this.animate();
    let _this = this
    // 如果设置了自动产生波源，则随机参数波源
    if (this.auto) {
        this.autoRepeat = setInterval(function () {
            _this.disturb(Math.random() * _this.width, Math.random() * _this.height);
        }, this.delay);
        this.disturb(Math.random() * this.width, Math.random() * this.height);
    }
}
// 动画主循环
wave.prototype.animate = function () {
    requestAnimationFrame(this.animate.bind(this));
    this.renderRipple();
}
// 保存图像的所有像素信息
wave.prototype.saveImageData = function () {
    // 在canvas中绘制图形
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
    // // 图像的ImageData对象
    this.texture = this.ctx.getImageData(0, 0, this.width, this.height);
    this.ripple = this.ctx.getImageData(0, 0, this.width, this.height);
}
var requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 1000);
        };
})();

export {
    wave,
    requestAnimationFrame
}