/*
 * File: app/store/storeSec.js
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

Ext.define('MyApp.store.storeSec', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelSec',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'storeSec',
            autoSync: true,
            model: 'MyApp.model.modelSec',
            proxy: {
                type: 'jsonp',
                url: 'http://erpdc:10080/Gemini/GetPgmSec.php',
                reader: {
                    type: 'json',
                    rootProperty: 'root'
                }
            },
            listeners: {
                load: {
                    fn: me.onJsonpstoreLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonpstoreLoad: function(store, records, successful, operation, eOpts) {

        console.log('Records: ',successful, records, store, operation);
        if (records.length > 0){
        data = records[0].data;
            if (data.MSG !== ''){
                Ext.getCmp('o1').setHidden(true);
                Ext.getCmp('o2').setHidden(true);
                        Ext.getCmp('tran').setHidden(true);
                 Ext.getCmp('holdcode').setHidden(true);
                Ext.getCmp('rqdate').setHidden(true);
                Ext.getCmp('svia').setHidden(true);
                 Ext.getCmp('cval').setHidden(true);
                 Ext.getCmp('dsval').setDisabled(true);
                 Ext.Msg.alert('Security Alert', data.MSG);
            } else {
                if (data.SPOP01 == 'Y'){
               Ext.getCmp('o1').setHidden(false);



                  if (data.SPOP02 == 'Y'){
                Ext.getCmp('o2').setHidden(false);
                  } else {
                     Ext.getCmp('o2').setHidden(true);
                }

                          if (data.SPOP15 == 'Y'){
                Ext.getCmp('tran').setHidden(false);
                  } else {
                     Ext.getCmp('tran').setHidden(true);
                }



        Ext.getCmp('userid').setValue(data.USER);
        Ext.getCmp('commonuser').setValue(data.COMMONUSER);
        Ext.getCmp('email').setValue(data.EMAIL);
            Ext.getCmp('role').setValue(data.ROLE);
        Ext.getCmp('vend').setValue(data.VEND);
        Ext.getCmp('sls').setValue(data.SLS);
        Ext.getCmp('sppgid').setValue(data.SPPGID);
        Ext.getCmp('name').setValue(data.NAME);
            Ext.getCmp('sppgid').setValue(data.SPPGID);
        Ext.getCmp('spop1').setValue(data.SPOP01);
        Ext.getCmp('spop2').setValue(data.SPOP02);
        Ext.getCmp('spop3').setValue(data.SPOP03);
        Ext.getCmp('spop4').setValue(data.SPOP04);
        Ext.getCmp('spop5').setValue(data.SPOP05);
        Ext.getCmp('spop6').setValue(data.SPOP06);
        Ext.getCmp('spop7').setValue(data.SPOP07);
        Ext.getCmp('spop8').setValue(data.SPOP08);
        Ext.getCmp('spop9').setValue(data.SPOP09);
                         if (Ext.getCmp('spop9').getValue()  == 'Y'){
                 Ext.getCmp('cval').setDisabled(false);
                  } else {
                     Ext.getCmp('cval').setDisabled(true);
                }
        Ext.getCmp('spop10').setValue(data.SPOP10);


                         if (Ext.getCmp('spop10').getValue()  == 'Y'){
                 Ext.getCmp('dsval').setDisabled(false);
                  } else {
                     Ext.getCmp('dsval').setDisabled(true);
                }


        Ext.getCmp('spop11').setValue(data.SPOP11);
        Ext.getCmp('spop12').setValue(data.SPOP12);
        Ext.getCmp('spop13').setValue(data.SPOP13);
        Ext.getCmp('spop14').setValue(data.SPOP14);
        Ext.getCmp('spop15').setValue(data.SPOP15);
                Ext.getCmp('libl').setValue(data.libl);
            Ext.getCmp('udata').setValue(data.UDATA);
        }
        }
        }
    }

});