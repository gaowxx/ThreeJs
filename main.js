~ function() {

	// 1. 创建场景和摄像机
	const scene = new THREE.Scene();

	// 2. 创建摄像机
	// 参数：1.视角 2.指投影窗口的长宽比 3.表示从距离摄像机多远的位置开始渲染 4.表示距离摄像机多远的位置截止渲染 1000
	// const camera = new THREE.PerspectiveCamera("视角", "指投影窗口的长宽比", "表示从距离摄像机多远的位置开始渲染", "表示距离摄像机多远的位置截止渲染 1000" )
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	// 3. 创建ThreeJs渲染器
	// 抗锯齿
	const renderer = new THREE.WebGLRenderer({antialias: true})
	// 设置渲染器场景的大小
	// 参数：1.宽度 2.高度
	renderer.setSize(window.innerWidth, window.innerHeight);

	// 把渲染器添加到我们的页面中去
	// 渲染器初始化建立好后是游离在dom之外的，需要append到页面里去
	document.body.appendChild(renderer.domElement);

	// 4. 创建基础几何模型
	// const geometry = new THREE.BoxGeometry("x轴的长","y轴的长","z轴的长")
	const geometry = new THREE.BoxGeometry(2, 2, 2)
	
	// 7. 创建纹理贴图
	const texture = new THREE.TextureLoader().load("imgs/001.jpg")
	
	
	// 创建材质
	// const material = new  THREE.MeshBasicMaterial({color: 0x00ff00});
	// 7. 添加纹理材质
	const material = new  THREE.MeshBasicMaterial({map: texture});
	
	// 创建网格对象，现在需要把材质material和几何体geometry结合起来展示，把材质添加到几何体当中
	const cube = new THREE.Mesh(geometry, material);
	
	// 把网格对象cube添加到场景中去
	scene.add(cube);

	// 5. 添加帧渲染
	// 在函数中用递归把场景scene和摄像机camera渲染出去
	function animate() {
		requestAnimationFrame(animate);
		
		// 网格对象自旋转
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01		
		
		// 渲染器渲染场景和摄像机
		renderer.render(scene, camera);
	}
	animate();
	
	// 摄像机空间Z轴位置
	// 对摄像机的z轴做下拉伸，不然靠太近了就看不见
	camera.position.z = 6
	
	// 6. 尺寸响应式，自适应宽高
	window.addEventListener('resize', () => {
		// 初始化摄像机camera
		camera.aspect = window.innerWidth / window.innerHeight;
		// 重新初始化camera的矩阵投影
		camera.updateProjectionMatrix();
		
		// 初始化渲染器renderer尺寸
		renderer.setSize(window.innerWidth, window.innerHeight);
	})
	
}();
