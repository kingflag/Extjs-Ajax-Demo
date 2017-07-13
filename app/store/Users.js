Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    //fields: ['name', 'email'],
    model: 'AM.model.User',
    autoLoad: true,
    // 静态数据测试
    // proxy: {
    //     type: 'ajax',
    //     api: {
    //         read: 'data/users.json',
    //         update: 'data/updateUsers.json'
    //     },
    //     reader: {
    //         type: 'json',
    //         root: 'users',
    //         successProperty: 'success'
    //     }
    // }

    //从后台取动态数据
    proxy: new Ext.data.HttpProxy({
        type: 'ajax',
        url: 'http://127.0.0.1:8080/maven-server/rest/core/apicla/findall',
        actionMethods: {
            read: 'GET' // Store设置请求的方法，与Ajax请求有区别  
        },
        reader: new Ext.data.JsonReader({
            type: 'json',
            root: 'restlt', // 数据(不配置的话无法接收数据)，返回的key为data
            totalProperty: 'totalRecord' // 记录数(不配置的话无法翻页)，返回的key为totalRecord  
        })
    }),
    updateUser: function (values) {
        console.log(values)
        var data = { id: values.id, user: values.user, 'surplus': values.surplus, 'createtime': values.createtime }
        Ext.Ajax.request({
            url: 'http://127.0.0.1:8080/maven-server/rest/core/apicla/update',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            dataType: 'JSONP',
            params: Ext.JSON.encode(data),
            success: function (response, options) {
                if ((response.status == 200) && (response.responseText == 1)) {
                    alert("success");
                } else {
                    alert("fail")
                }
            },
            failure: function () {
                alert("failure")
            }
        });
    },
    deleteUser: function (values, record) {
        var id = values.id;
        Ext.Ajax.request({
            url: 'http://127.0.0.1:8080/maven-server/rest/core/apicla/delete/'+id,
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            dataType: 'JSONP',
            success: function (response, options) {
                if ((response.status == 200) && (response.responseText == 1)) {
                    //Ext.Msg.alert("success",'此处应该添加动态刷新，我不知道EXTJS怎么实现');
                    //此处应该添加动态刷新，我暂时不知道EXTJS怎么实现
                    window.location.href=window.location.href; 
                    alert("succes");
                } else {
                    alert("fail")
                }
            },
            failure: function () {
                alert("failure")
            }
        });
    },
    addUser: function(values){
        console.log(values);
        var data = {user: values.user, 'surplus': values.surplus, 'createtime': values.createtime }
        Ext.Ajax.request({
            url: 'http://127.0.0.1:8080/maven-server/rest/core/apicla/save',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            dataType: 'JSONP',
            params: Ext.JSON.encode(data),
            success: function (response, options) {
                if ((response.status == 200) && (response.responseText == 1)) {
                    window.location.href=window.location.href; 
                    alert("success");
                    window.location.href=window.location.href; 
                } else {
                    alert("fail")
                }
            },
            failure: function () {
                alert("failure")
            }
        });
    }

});
