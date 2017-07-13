Ext.define('AM.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',

    store: 'Users',

    initComponent: function() {
        // this.store = {
        //     fields: ['name', 'email'],
        //     data: [
        //         { name: 'Ed', email: 'ed@sencha.com' },
        //         { name: 'Tommy', email: 'tommy@sencha.com' }
        //     ]
        // };

        this.columns = [
            { header: 'Id', dataIndex: 'id', flex: 1 },
            { header: 'User', dataIndex: 'user', flex: 1 },
            { header: 'Surplus', dataIndex: 'surplus', flex: 1 },
            { header: 'Createtime', dataIndex: 'createtime', flex: 1 }
        ];

        this.callParent(arguments);
    }
});
