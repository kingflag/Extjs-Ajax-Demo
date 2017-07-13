Ext.application({
    //今天有人问我，demo运行出错，
    //他妹的，官方demo错了 官方demo写的是 requires: 'Ext.container.Viewport'，
    //这里的requires需要是个数组，extjs源码没处理好只有一个requires的情况
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: ['Users'],

    launch: function () {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                title: "头部",
                html: "上",
                region: "north",
                height: 50
            }, {
                title: "West Pannel（左部）",
                html: "添加用户",
                // region: "west",
                region: "north",
                width: 200,
                xtype: 'useradd'
            }, {
                title: "Main Pannel",
                html: "中",
                region: "center",
                xtype: 'userlist'
            }]
        });
    }
});
