<!--music-->
    <!-- require APlayer  文件来源于博客园中的某个博客的文件资源 -->
	<link rel="stylesheet" href="https://blog-static.cnblogs.com/files/blogs/693306/APlayer.min.css">
	<script src="https://blog-static.cnblogs.com/files/blogs/693306/APlayer.min.js"></script>
    <!-- require MettingJS -->
	<script src="https://blog-static.cnblogs.com/files/blogs/693306/Meting.min.js"></script>  <!-- 音乐插件：可以指定以下音乐源、音乐列表等 -->
    <!-- 
        data-server：设置播放源  netease(网易云)、tencent(QQ音乐)
        data-type：音乐列表
        data-id：音乐列表的id
		data-autoplay：是否自动播放
    -->
	<div id="aplayer" 
		class="aplayer" 
		data-server="tencent"
		data-type="playlist"
		data-id="9123131355" 
		data-order="random" 
		data-autoplay="false"
		data-fixed="true" 
		data-volume="0.2"></div>
