var Confirm = {
    errorShow: '',
    show:function (msg,callBackFun) {
        this.errorShow = layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            shadeClose: false,
            content: '<div class="error-title" style="text-align: center;">\n' +
            '            <div class="error-msg">'+msg+'</div>\n' +
            '        </div>\n' +
            '        <span class="confirm-btn sure">确认</span><span class="confirm-btn cancel">取消</span>',
            area: ['394px','auto'],
            offset: '218px',
            scrollbar: false,
            resize: false,
        });
        setTimeout(function(){
            parent.$(".tea-shade").show();
        },0);
        var _this = this;
        $('.confirm-btn.sure').on('click',function (e) {
            _this.hide();
            parent.$(".tea-shade").hide();
            return callBackFun(true);
            e.stopPropagation();
        });
        $('.confirm-btn.cancel').on('click',function (e) {
            _this.hide();
            parent.$(".tea-shade").hide();
            return callBackFun(false);
            e.stopPropagation();
        })
    },
    hide:function () {
        layer.close(this.errorShow);
        parent.$(".tea-shade").hide();
    }
};