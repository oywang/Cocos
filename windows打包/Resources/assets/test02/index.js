System.register("chunks:///_virtual/test02",["./test02.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test02.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,s,n,o,i,r,a,c,l,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,s=t.initializerDefineProperty},function(t){n=t.cclegacy,o=t.Camera,i=t._decorator,r=t.Component,a=t.input,c=t.Input,l=t.geometry,u=t.PhysicsSystem}],execute:function(){var p,y,h,m,b;n._RF.push({},"ce2bbbZSNFK97lOLHGNWBUi","test02",void 0);const{ccclass:f,property:g}=i;t("test02",(p=f("test02"),y=g(o),p((b=e((m=class extends r{constructor(...t){super(...t),s(this,"camera",b,this)}start(){a.on(c.EventType.MOUSE_DOWN,this.OnMouseDown,this)}OnMouseDown(t){var e=new l.Ray,s=this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),e);if(u.instance.raycastClosest(s)){const t=u.instance.raycastClosestResult.hitPoint;this.node.setPosition(t)}}}).prototype,"camera",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=m))||h));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/test02', 'chunks:///_virtual/test02'); 
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