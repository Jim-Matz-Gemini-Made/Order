/*
 * File: app/store/storeFRC.js
 *
 * This file was generated by Sencha Architect version 4.2.6.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.7.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.7.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.storeFRC', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelFRC',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'storeFRC',
            autoSync: true,
            model: 'MyApp.model.modelFRC',
            proxy: {
                type: 'jsonp',
                url: 'http://erpdc:10080/Gemini/Order/GetFRC.php',
                reader: {
                    type: 'json',
                    rootProperty: 'root'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonpstoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {

                db = Ext.getCmp('db').getValue();
                ord = Ext.getCmp('inOrd').getValue();

              store.getProxy().extraParams = {
                        DB: db,
                        PGID: 'MW',
                  ORD: ord
        };


    }

});