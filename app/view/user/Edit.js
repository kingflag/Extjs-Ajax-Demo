Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    // extend:'Ext.Panel',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name: 'id',
                fieldLabel: 'Id',
                readOnly: true //保证Id只读
            }, {
                xtype: 'textfield',
                name: 'user',
                fieldLabel: 'User'
            }, {
                xtype: 'textfield',
                name: 'surplus',
                fieldLabel: 'Surplus'
            }, {
                xtype: 'textfield',
                //xtype:'datefield',
                name: 'createtime',
                fieldLabel: 'Createtime'
            }]
        }];

        this.buttons = [
            {
                text: 'Delete',
                action: 'delete'
                //click: this.Ajaxsave
            }, {
                text: 'Save',
                action: 'save'
                //click: this.Ajaxsave
            }, {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }];


        this.callParent(arguments);

        function Ajaxsave(argument) {
            console.log('test');
        }
    }


});
