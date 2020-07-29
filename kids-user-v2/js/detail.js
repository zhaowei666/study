var vm = new Vue({
    el: '#app',
    data() {
        return {
            selectShow: true,
            detail: {
                "error": 0,
                "biz": "SAPI_GETPRODUCTDETAIL",
                "msg": {
                    "P_Id": "89",
                    "P_Name": "全家福-风和日暖",
                    "P_Ename": "",
                    "P_Price": "899.00",
                    "P_SmallImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/select-familyWarm.png",
                    "P_ImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/dt-familyWarm.jpg",
                    "P_DtlImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/home-familyWarm.png",
                    "P_OriPrice": "899.00",
                    "P_Price_Ext1": "899.00",
                    "P_OriPrice_Ext1": "899.00",
                    "P_IntroPath": "https://cdn.himokids.com/HMA_Kids_Upload/intro-familyWarm.png",
                    "P_Tip": "",
                    "P_AddPersonPrice": "200.00",
                    "P_IsOut": "0",
                    "P_MinPerson": "3",
                    "P_MaxPerson": "5",
                    "P_IsOnSale": "1",
                    "P_IsShow": "1",
                    "P_SkuIsRequire": "1",
                    "P_TipImg": "https://cdn.himokids.com/HMA_Kids_Upload/pro-89.png",
                    "PD_Desc_Art": "",
                    "PD_Desc": "",
                    "PD_Desc_Ext1": "全家福-风和日暖",
                    "PD_Note": "全家福-风和日暖",
                    "PD_Note_Ext1": "全家福-风和日暖",
                    "P_Photo": [
                        {
                            "path": "https://cdn.himokids.com/kids-sample/e6686e60d23eb0a7f846ebe79801d048.png"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/f628b0ec8347b7ebdb380212afabbe4d.png"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/14ee71cf6515e93e6aacbbb8d43858a0.png"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/23ba3f88e5787c7d147d3d06fd9d0b09.png"
                        }
                    ],
                    "P_Sku": [
                        {
                            "PS_Id": "652",
                            "PS_Pid": "89",
                            "PS_Type": "3",
                            "PS_Title": "九张",
                            "PS_Price": "400.00",
                            "PS_MinPerson": "3",
                            "PS_MaxPerson": "5",
                            "PS_Sort": "1",
                            "PS_Ext": "",
                            "PS_Price_Ext1": "400.00",
                            "PS_AddPersonPrice": "200.00"
                        }
                    ]
                }
            },
            service_card:false,
            service_card_value_selected:false
        }
    },
    methods: {
        selectModel: function () {
            // this.className = 'service-title-selected'
            // var parents = this.parents();
            this.selectShow = !this.selectShow
            // this.className = 'service-title-selected'
        },
        addProduct: function(){
            this.service_card = true
        },
        cardClose: function () {
            this.service_card = false
        },
        chooseItem:function(){
            // this.service_card_value_selected = true
            this.className = 'service-card-product-value-selected'

        }
    }
})