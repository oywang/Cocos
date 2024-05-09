import { _decorator, assetManager, Component,Sprite, SpriteFrame, } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test03')
export class test03 extends Component {
    @property({type:Sprite})
    sprite:Sprite

    @property
    SampleSpriteFrame:SpriteFrame

    bundleURL:string = "D:\\Courses\\Cocos\\Cocos Projects\\Test\\build\\build-bundle\\web-desktop\\test03"
    start() {
      // 在cocos引擎中，绑定单击事件
    }

    //加载ab包
    LoadBundle(){
        assetManager.loadBundle(this.bundleURL,(err,bundle)=>{
            console.log(err)
            console.log("加载ab包完成，名称为："+bundle.name)
        }) 
    }

    // 加载资源
    loadAsset(){
        let bundle = assetManager.getBundle("test03")
        bundle.load("1/spriteFrame",SpriteFrame,function(err,asset){
            this.SampleSpriteFrame = asset
            console.log("加载资源完成，名称为："+this.SampleSpriteFrame.name)
        }.bind(this))
    }

    // 设置Sprite
    SetSpriteFrame(){
        var SampleSprite = this.node.getComponent(Sprite)
        SampleSprite.spriteFrame = this.SampleSpriteFrame
        console.log("设置Sprite完成")
    }

    // 释放资源
    ReleaseAsset(){
        assetManager.releaseAsset(this.SampleSpriteFrame)

        // 获取已经加载完的资源包
        let bundle = assetManager.getBundle("test03")
        bundle.release("1/spriteFrame",SpriteFrame)
        bundle.releaseAll();
        console.log("释放资源："+this.SampleSpriteFrame.name)
    }
}


