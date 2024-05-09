import { _decorator, Component, geometry, input, Input,Camera,EventMouse, PhysicsSystem, } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test02')
export class test02 extends Component {
    @property(Camera)
    camera:Camera

    start() {
        // 添加鼠标的监听事件，在按下时触发OnMouseDown方法
        input.on(Input.EventType.MOUSE_DOWN,this.OnMouseDown,this)
    }
   
    OnMouseDown(event:EventMouse){
        //通过监听鼠标按下的输入事件，实现将鼠标坐标转换成射线
        var outRay = new geometry.Ray() 
        var sampleRay = this.camera.screenPointToRay(event.getLocationX(),event.getLocationY(),outRay)
    
        // 检查射线检测的结果
        if(PhysicsSystem.instance.raycastClosest(sampleRay)){
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            const hitPoint = raycastClosestResult.hitPoint // 获取击中点（世界坐标）
            this.node.setPosition(hitPoint) // 修改物体位置
        }
    }
}


