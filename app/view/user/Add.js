Ext.define('AM.view.user.Add', {
    //extend: 'Ext.window.Window',
    extend: 'Ext.Panel',
    alias: 'widget.useradd',

    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [{
            xtype: 'form',
            items: [ {
                xtype: 'textfield',
                name: 'user',
                id:'fadduser',
                fieldLabel: 'User'
            }, {
                xtype: 'textfield',
                name: 'surplus',
                id:'faddsurplus',
                fieldLabel: 'Surplus'
            }, {
                xtype: 'textfield',
                //xtype:'datefield',
                name: 'createtime',
                id:'faddcreatetime',
                fieldLabel: 'Createtime'
            }]
        }];

        this.buttons = [
            {
                text: 'Add',
                action: 'add'
                //click: this.Ajaxsave
            }];
        this.callParent(arguments);
    }
});


// Ext.define('AM.view.user.Add', {
//     extend: 'Ext.Button',
//     alias: 'widget.useradd',
//     initComponent: function () {
//         this.buttons = [
//             {
//                 text: 'Add',
//                 action: 'add',
//                 renderTo: document.body,
//                 text: '点击我',
//                 scale: 'large',
//             }];
//        this.callParent(arguments);
//     }
// });