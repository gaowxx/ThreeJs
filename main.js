~function(){
	
	// 1. 创建场景和摄像机
	const scene = new THREE.Scene();
	
	// 2. 创建摄像机
	// 参数：1.视角 2.指投影窗口的长宽比 3.表示从距离摄像机多远的位置开始渲染 4.表示距离摄像机多远的位置截止渲染 1000
	// const camera = new THREE.PerspectiveCamera("视角", "指投影窗口的长宽比", "表示从距离摄像机多远的位置开始渲染", "表示距离摄像机多远的位置截止渲染 1000" )
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
	
}();