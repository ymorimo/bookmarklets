var r=RegExp,l=location;
if(l.href.match(new r('^(https?://[^/]+\\.google\\.[^/]+\/search)(\\?[^#]+)(#.*\\bq=.*)?'))){
    var u=r.$1,p=r.$3||r.$2,q=(p.match(/[&#\?]q=([^&]*)/))[1];
    if(q){
        if(p.match(/[&#\?]lr=([^&]*)/))var lr=r.$1;
        if(p.match(/[&#\?]hl=([^&]*)/))var hl=r.$1;
        var nhl=(lr=='lang_ja'?'en':hl=='ja'?'en':'ja');
        l.href=u+'?q='+q+'&hl='+nhl+'&lr='+{'en':'','ja':'lang_ja'}[nhl];
    }
}
