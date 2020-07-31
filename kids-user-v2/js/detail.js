var vm = new Vue({
    el: '#app',
    data() {
        return {
            selectShow: true,
            detail: {
                "error": 0,
                "biz": "SAPI_GETPRODUCTDETAIL",
                "msg": {
                    "P_Id": "25",
                    "P_Name": "全家福-经典版",
                    "P_Ename": "",
                    "P_Price": "899.00",
                    "P_SmallImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/productdtl-family.png",
                    "P_ImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/dt-family.png",
                    "P_DtlImgPath": "https://cdn.himokids.com/HMA_Kids_Upload/home-family.png",
                    "P_OriPrice": "899.00",
                    "P_Price_Ext1": "899.00",
                    "P_OriPrice_Ext1": "899.00",
                    "P_IntroPath": "https://cdn.himokids.com/HMA_Kids_Upload/3012_intro-family.jpg",
                    "P_Tip": "",
                    "P_AddPersonPrice": "200.00",
                    "P_IsOut": "0",
                    "P_MinPerson": "3",
                    "P_MaxPerson": "5",
                    "P_IsOnSale": "1",
                    "P_IsShow": "1",
                    "P_SkuIsRequire": "1",
                    "P_TipImg": "https://cdn.himokids.com/HMA_Kids_Upload/3012-pro-25.png",
                    "PD_Desc_Art": "全家在一起才是福",
                    "PD_Desc": "全家在一起才是福",
                    "PD_Desc_Ext1": "1",
                    "PD_Note": "1",
                    "PD_Note_Ext1": "1",
                    "P_Photo": [
                        {
                            "path": "https://cdn.himokids.com/kids-sample/678d30b999dba16e69437b3fec0db11d.jpg"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/3ecd83f8fd8cbf83df63c3a10d23e2c7.jpg"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/1b42f6fb906cc318ff95429cb7b638ad.jpg"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/f300c7e07aeead49996b780742950f02.jpg"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/0eb4fded33fdd859d32015bd66db6e81.jpg"
                        },
                        {
                            "path": "https://cdn.himokids.com/kids-sample/f7db78cc28b6751314b699d602eaea77.jpg"
                        }
                    ],
                    "P_Sku": [
                        {
                            "PS_Id": "642",
                            "PS_Pid": "25",
                            "PS_Type": "3",
                            "PS_Title": "四宫格",
                            "PS_Price": "0.00",
                            "PS_MinPerson": "3",
                            "PS_MaxPerson": "5",
                            "PS_Sort": "1",
                            "PS_Ext": "",
                            "PS_Price_Ext1": "0.00",
                            "PS_AddPersonPrice": "200.00"
                        },
                        {
                            "PS_Id": "641",
                            "PS_Pid": "25",
                            "PS_Type": "3",
                            "PS_Title": "九宫格",
                            "PS_Price": "400.00",
                            "PS_MinPerson": "3",
                            "PS_MaxPerson": "5",
                            "PS_Sort": "2",
                            "PS_Ext": "",
                            "PS_Price_Ext1": "400.00",
                            "PS_AddPersonPrice": "200.00"
                        },
                        {
                            "PS_Id": "639",
                            "PS_Pid": "25",
                            "PS_Type": "3",
                            "PS_Title": "十二宫格",
                            "PS_Price": "640.00",
                            "PS_MinPerson": "3",
                            "PS_MaxPerson": "5",
                            "PS_Sort": "3",
                            "PS_Ext": "",
                            "PS_Price_Ext1": "640.00",
                            "PS_AddPersonPrice": "200.00"
                        }
                    ]
                }
            },
            service_card: false,
            activeNum: 1,
            countPrice: 0,
        }
    },
    methods: {
        selectModel: function () {
            // this.className = 'service-title-selected'
            // var parents = this.parents();
            this.selectShow = !this.selectShow
            // this.className = 'service-title-selected'
        },
        addProduct: function () {
            this.service_card = true
        },
        cardClose: function () {
            this.service_card = false
        },
        chooseItem: function () {
            var spans = event.target.parentNode.children;
            for (var i=0; i < spans.length; i++){
                spans[i].className = '';
            }
            var className = event.target.className;
            if (className){
                event.target.className = '';
            }else {
                event.target.className = 'service-card-product-value-selected';
            }
        },
        getClass: function (index, skuData) {
            if (index === +skuData.PS_MinPerson){
                return 'service-card-product-value-selected'
            }
            if (index === this.activeNum) {
                return 'service-card-product-value-selected'
            }
        },
        getPrice:function(){
          this.countPrice = 0
        }
    }
})