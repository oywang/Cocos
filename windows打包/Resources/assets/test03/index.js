System.register("chunks:///_virtual/test03",["./test03.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test03.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,s,i,l,o,a,n;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.initializerDefineProperty},function(e){s=e.cclegacy,i=e.Sprite,l=e._decorator,o=e.Component,a=e.assetManager,n=e.SpriteFrame}],execute:function(){var p,c,u,m,d,S;s._RF.push({},"e6ac7mDNhFCNYZDE+dJmiqg","test03",void 0);const{ccclass:h,property:b}=l;e("test03",(p=h("test03"),c=b({type:i}),p((d=t((m=class extends o{constructor(...e){super(...e),r(this,"sprite",d,this),r(this,"SampleSpriteFrame",S,this),this.bundleURL="D:\\Courses\\Cocos\\Cocos Projects\\Test\\build\\build-bundle\\web-desktop\\test03"}start(){}LoadBundle(){a.loadBundle(this.bundleURL,((e,t)=>{console.log(e),console.log("加载ab包完成，名称为："+t.name)}))}loadAsset(){a.getBundle("test03").load("1/spriteFrame",n,function(e,t){this.SampleSpriteFrame=t,console.log("加载资源完成，名称为："+this.SampleSpriteFrame.name)}.bind(this))}SetSpriteFrame(){this.node.getComponent(i).spriteFrame=this.SampleSpriteFrame,console.log("设置Sprite完成")}ReleaseAsset(){a.releaseAsset(this.SampleSpriteFrame);let e=a.getBundle("test03");e.release("1/spriteFrame",n),e.releaseAll(),console.log("释放资源："+this.SampleSpriteFrame.name)}}).prototype,"sprite",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(m.prototype,"SampleSpriteFrame",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=m))||u));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/test03', 'chunks:///_virtual/test03'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});