System.register("chunks:///_virtual/test01",["./test01.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test01.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,n,e,a,s,o,r;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.initializerDefineProperty},function(i){e=i.cclegacy,a=i.AnimationClip,s=i._decorator,o=i.Component,r=i.SkeletalAnimation}],execute:function(){var l,p,c,h,m;e._RF.push({},"5dd9cWFG+FBib2pjfh18hZe","test01",void 0);const{ccclass:u,property:d}=s;i("test01",(l=u("test01"),p=d([a]),l((m=t((h=class extends o{constructor(...i){super(...i),this.animation=void 0,n(this,"animationClips",m,this),this.index=0}start(){this.animation=this.getComponent(r),this.animation.defaultClip=this.animationClips[this.index],this.animation.play(),this.animation.on(r.EventType.FINISHED,this.NextAnimation,this)}NextAnimation(){this.animation.defaultClip=this.animationClips[this.index+1],this.animation.play()}}).prototype,"animationClips",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=h))||c));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/test01', 'chunks:///_virtual/test01'); 
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