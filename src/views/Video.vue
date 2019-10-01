<template>
    <div>
        <div>
            <div  id="dplayer" style="width: 100%;"></div>
        </div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import flv from 'flv.js'
    import DPlayer   from 'dplayer'

    export default {
        name: "Video",
        mounted() {
            new DPlayer({
                container: document.getElementById('dplayer'),
                video: {
                    //url: 'http://lst.allove.com/uploads/uploads/video/2019/08/06/64a15b0aeb28d156bcfeaff6d799f962.mp4'
                    url: 'https://img.smartnail.cn/video/flv/pdd.flv',
                    type: 'customFlv',
                    customType: {
                        customFlv: function(video, player) {
                            const flvPlayer = flv.createPlayer({
                                type: 'flv',
                                url: video.src,
                            });
                            flvPlayer.attachMediaElement(video);
                            flvPlayer.load();
                        },
                    },
                },
            });
        }
    }
</script>

<style scoped>

</style>