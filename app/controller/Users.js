Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users'
    ],

    models: ['User'],

    views: [
        'user.List',
        'user.Edit',
        'user.Add'
    ],

    init: function () {

        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useradd button[action=add]': {
                click: this.addUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=delete]': {
                click: this.deleteUser
            }
        });

    },

    addUser: function (button) {
        var user = Ext.getCmp('fadduser').getValue();
        var surplus = Ext.getCmp('faddsurplus').getValue();
        var createtime = Ext.getCmp('faddcreatetime').getValue();

        if ((user.length > 0) || (surplus.length > 0) || (createtime.length > 0)) {
            if (!isNaN(surplus)) {

                var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
                var r = createtime.match(reg);
                if (r == null) {
                    Ext.Msg.alert("警告", "时间格式错误");
                    return false;
                };

                var values = {};
                values.user = user;
                values.surplus = surplus;
                values.createtime = createtime;
                this.getUsersStore().addUser(values);
            } else {
                Ext.Msg.alert("警告", "不是数字");
                return false;
            }
        } else {
            Ext.Msg.alert("警告", "参数不全");
            return false;
        }


    },

    editUser: function (grid, record) {
        console.log('Double clicked on ' + record.get('id'));
        // console.log(grid)
        // removeData = grid;
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },

    updateUser: function (button) {
        console.log('clicked the Save button');
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        // this.getUsersStore().sync();
        this.getUsersStore().updateUser(values);
    },
    deleteUser: function (button) {
        // console.log(removeData);
        // grid = removeData;
        // var st = grid.getStore();
        // st.remove(record);
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        this.getUsersStore().deleteUser(values, record);
    }
});
