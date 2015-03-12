/**
 * Created by lxg on 15-3-12.
 * base javascript function
 * EM4 is the namespace
 */
var EM4 = EM4 || {}
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined){
            if (!o[this.name].push){
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        }else{
            o[this.name] = this.value || '';
        }
    });
    return o;
};