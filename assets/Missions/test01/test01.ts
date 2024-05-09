import { _decorator, AnimationClip, Component, Node, SkeletalAnimation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test01')
export class test01 extends Component {
    animation:SkeletalAnimation // 骨骼动画组件

    @property([AnimationClip]) // 骨骼动画
    animationClips:AnimationClip[] = []

    index:number = 0
    start() {
        // 播放第一次的动画
        this.animation = this.getComponent(SkeletalAnimation)
        this.animation.defaultClip = this.animationClips[this.index]
        this.animation.play()

        // 第一次动画播放完成后，切换为下一段动画
        this.animation.on(SkeletalAnimation.EventType.FINISHED,this.NextAnimation,this)
        
    }

    // 下一段动画
    NextAnimation(){
        this.animation.defaultClip = this.animationClips[this.index + 1]
        this.animation.play()
    }
}


