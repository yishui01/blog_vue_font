<template>
    <!--评论框大部分抄自 https://github.com/xb2016/kratos-pjax 主题的评论框-->
    <div>
        <div id="respond" class="comment-respond">
            <!--<h4 id="reply-title" class="comment-reply-title">发表评论</h4>-->
            <div class="comment form-group has-feedback">
                <!--回复框-->
                <div class="input-group">
                <textarea class="form-control"
                          id="comment" placeholder="|´・ω・)ノ还不快点说点什么呀poi~"
                          name="comment" rows="5" aria-required="true" required="">
                </textarea>
                </div>
                <!-- 表情-->
                <div class="OwO" :class="{'OwO-open':owoOpen}">
                <div class="OwO-logo"  @click="owoOpen=!owoOpen"><span>OωO表情</span></div>
                <div class="OwO-body" style="width: 90%">
                    <div @click="owoOpen=!owoOpen">
                        <ul v-for="(item,key,index) in owo" :key="index"
                            class="OwO-items" :class="[owoTab == index ? 'OwO-items-show' :'','OwO-items-'+item.type]"
                            style="max-height: 197px;">
                            <span v-if="item.type=='image'">
                                 <li v-for="(t2,i2) in item.container" :key="i2" class="OwO-item" :title="t2.text" :desc="t2.desc">
                                     <a><img :src="t2.icon"></a>
                                </li>
                            </span>
                            <span v-else>
                                 <li v-for="(t2,i2) in item.container" :key="i2" class="OwO-item" :title="t2.text" :desc="t2.desc">
                                     <a>{{t2.icon}}</a>
                                 </li>
                            </span>
                        </ul>
                    </div>
                  <div class="OwO-bar">
                        <ul class="OwO-packages">
                            <li v-for="(item,key,index) in owo" :key="index" :class="{'OwO-package-active':owoTab == index}" @click="owoTab=index"><span>{{key}}</span></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div style="text-align: right;">
                <mybut text="发表评论"/>
            </div>
        </div>
    </div>

</template>

<script>
    import mybut from '@/components/Button'
    export default {
        name: "Reply",
        components:{
            mybut
        },
        data(){
            return{
                owoOpen:false,
                owoTab:0,
                owo:{}
            }
        },
        created() {
            this.owo = this.$owo
        }
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
/***以下css全部抄自 https://github.com/xb2016/kratos-pjax/blob/master/static/css/kratos.min.css  ***/
    @-webkit-keyframes a{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0);transform:translate(0) rotate(0)}}
    @keyframes a{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0);transform:translate(0) rotate(0)}}

    a {
        color: #51aded;
        text-decoration: none;
        -webkit-transition: .5s;
        transition: .5s;
    }

    a {
        color: #333;
    }
    a:hover {
        outline: 0;
        background-color: transparent;
        text-decoration: none;
        cursor: url(https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/pointer.cur),auto;
        color: #51aded!important;
    }
    .form-control{
        width: 100%;padding: 6px 12px;color: #555;line-height: 1.42857143;
    }
.comments-area{word-wrap:break-word;word-break:break-all}
.comments-area ol{margin-top:15px;list-style:none;margin-left:-40px}
.comments-area ol.children{margin-top:8px}
.comments-area .comment-list li{padding:17px 17px 14px;background-color:#fff;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}
.comments-area .comment-list li:not(:first-child){margin-top:15px}
.comments-area .comment-list li>.comment-respond{-webkit-box-shadow:0 1px 10px rgba(0,0,0,.1);box-shadow:0 1px 10px rgba(0,0,0,.1)}
.comments-area .comment-list .children li{margin-top:12px;background-color:#fffdf1;-webkit-box-shadow:0 2px 10px #e0e0e0;box-shadow:0 2px 10px #e0e0e0}
/*.comments-area .avatar{position:absolute;margin-top:1px;width:50px;height:50px;border-radius:50%;background:url(../images/avatar.png) no-repeat center #f0f0f0;-webkit-box-shadow:0 .125rem 1.0625rem 0 rgba(0,0,0,.22);box-shadow:0 .125rem 1.0625rem 0 rgba(0,0,0,.22)}*/
.comments-area .comment-awaiting-moderation,.comments-area .comment-meta,.comments-area .fn{margin-left:63px}
.comments-area .fn a{color:#343a40}
.comments-area .fn a:hover{color:#1d2124}
.comments-area .comment-list .bypostauthor>div>div>.fn:after{margin-left:6px;padding:1.5px 4px;border-radius:2px;background:#00a4ff;color:#fff;content:"作者";font-size:11px;top:-1px;position:relative}
.comments-area .says{display:none}
.comments-area .comment-awaiting-moderation{font-size:15px}
.comments-area .comment-meta{margin-bottom:5px;color:#777;font-size:13px}
.comments-area .comment-meta a:hover{color:#1d2124}
.comments-area .reply{text-align:right}
.comments-title{margin:0;font-size:24px;padding:30px;border:1px solid #e0e0e0;background-color:#fff}
.commentmetadata a{color:#848484}
.comment-body p{color:#333;margin-bottom:0}
.comment-form-cookies-consent label{margin:0 10px;color:#888;font-size:15px;font-weight:100}
a.comment-reply-link:hover,a.comment-reply-login:hover{background-color:#666;color:#fff!important}
a.comment-reply-link,a.comment-reply-login{text-decoration:none;padding:2px 5px;border-radius:2px;background-color:#999;color:#fff;font-size:12px;-webkit-transition:all .4s;transition:all .4s}
.comment-metadata a,.comments-area a.url{color:#444;text-decoration:none}
.comment-respond{margin-top:15px;background-color:#fff;border-radius:0;padding:20px 20px 8px 20px} /**-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1);**/
#comments-nav{text-align:center;margin:0 0 15px}
#comments-nav>a,#comments-nav>span{margin:0 4px}
#comments-nav a{padding:5px 10px;border:1px solid #eee;background-color:#eee;color:#777}
#comments-nav a:hover{border:1px solid #51aded;background-color:#51aded;color:#fff!important}
#comments-nav span.current{font-weight:700;border:1px solid #51aded;background-color:#51aded;padding:5px 10px;color:#fff}
#respond #reply-title{font-size:20px;color:#666;margin-top:5px}
#respond #cancel-comment-reply-link{color:#848484}
#respond .comment-notes,#respond .logged-in-as{margin:0 0 10px;color:#888}
#respond .input-group-addon{padding:6px 8px}
#respond .input-group-addon i{width:20px}
#respond .comment .form-control{background:url(https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/comment.png) right bottom no-repeat}
#respond .form-control{box-shadow:none;background:0 0;border:1px solid #ccc;height:auto;font-size:14px;font-weight:300;border-radius:0}
#respond .has-feedback{position:relative}
#respond .has-feedback .form-control:not(:first-child){padding-right:30px}
#respond .form-control-feedback{position:absolute;right:0;z-index:2;display:block;width:34px;height:34px;text-align:center;pointer-events:none}
#respond .must-log-in,.must-log-in a{color:#555}
#comments img{max-width:100%}
.comment-form .form-control-feedback{line-height:40px;color:#848484}
.comment-form .input-group,.comment-form .btn-primary{width:100%}
.comment-form .comment-author{margin-top:10px}
.comment-form .logged-in-as a{color:#848484}
.OwO{position:relative;text-align: left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
.OwO:hover .OwO-logo{color:#444;}
.OwO.OwO-open .OwO-logo{border-radius:4px 4px 0 0;border-bottom:0;color:#444}
.OwO.OwO-open .OwO-body{display:block}
.OwO.OwO-up .OwO-body{top:inherit;bottom:21px;border-radius:4px 4px 4px 0}
.OwO.OwO-up .OwO-body .OwO-bar .OwO-packages li:nth-child(1){border-radius:0}
.OwO.OwO-up.OwO-open .OwO-logo{border:1px solid #ddd;border-radius:0 0 4px 4px;border-top:0}
.OwO .OwO-logo{position:relative;display:inline-block;color:#888;border:1px solid #ddd;border-radius:4px;font-size:13px;padding:2px 5px;height:22px;box-sizing:border-box;z-index:2;line-height:16px}
.OwO .OwO-logo:hover span{display:inline-block;-webkit-animation:a 5s infinite ease-in-out;animation:a 5s infinite ease-in-out}
.OwO .OwO-body{display:none;position:absolute;width:400px;background:#fff;border:1px solid #ddd;z-index:3;top:26px;border-radius:0 4px 4px 4px}
.OwO .OwO-body .OwO-items{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none;overflow:auto;padding:10px;margin:0;font-size:0}
.OwO .OwO-body .OwO-items .OwO-item{list-style-type:none;background:#f7f7f7;padding:5px 10px;border-radius:5px;box-shadow:none;-webkit-box-shadow:none;display:inline-block;font-size:12px;line-height:14px;margin:5px 6px;-webkit-transition:.3s;transition:.3s}
.OwO .OwO-body .OwO-items .OwO-item:hover{background:#eee;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-animation:a 5s infinite ease-in-out;animation:a 5s infinite ease-in-out}
.OwO .OwO-body .OwO-items-emoji .OwO-item{font-size:20px;line-height:19px}
.OwO .OwO-body .OwO-items-image .OwO-item{box-sizing:border-box}
.OwO .OwO-body .OwO-items-image .OwO-item img{max-height:5em;max-width:auto}
.OwO .OwO-body .OwO-items-show{display:block}
.OwO .OwO-body .OwO-bar{width:100%;height:30px;border-top:1px solid #ddd;background:#fff;border-radius:0 0 4px 4px;color:#444}
.OwO .OwO-body .OwO-bar .OwO-packages{margin:0;padding:0;font-size:0}
.OwO .OwO-body .OwO-bar .OwO-packages li{list-style-type:none;display:inline-block;line-height:30px;font-size:14px;padding:0 10px;margin-right:3px;margin-top:0;background:#fff;box-shadow:unset}
.OwO .OwO-body .OwO-bar .OwO-packages li:nth-child(1){border-radius:0 0 0 3px}
.OwO .OwO-body .OwO-bar .OwO-packages li:hover{background:#eee}
.OwO .OwO-body .OwO-bar .OwO-packages .OwO-package-active{background:#eee;-webkit-transition:.3s;transition:.3s}
</style>
