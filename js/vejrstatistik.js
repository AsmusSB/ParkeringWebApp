Vue.createApp({
    data() {
        return {
            tempData1: [],
            tempData2: [],
            regnData: [],
            vindData: [],
            selectDate: null,
            selectDate2: null,
            dayDate: null,
            beforeDate: null,
            monthDate: null,
            beforeMonth:null,
        }
    },
    async created() {
        try {
            
            
        } catch (ex) {
            alert(ex.message)
        }
    },
    methods: {
        async getTempData() {
            const current = new Date(this.selectDate);
            const url = "https://dmigw.govcloud.dk/v2/metObs/collections/observation/items?api-key=9c03456a-00ce-48db-a13b-907255c2eb73&stationId=06184&" + `datetime=${this.selectDate}`+"T00:00:00Z/"+`${this.selectDate}`+"T23:59:59Z&"+"parameterId=temp_mean_past1h"
            const url2 = "https://dmigw.govcloud.dk/v2/metObs/collections/observation/items?api-key=9c03456a-00ce-48db-a13b-907255c2eb73&stationId=06184&" + `datetime=${this.selectDate2}`+"T00:00:00Z/"+`${this.selectDate2}`+"T23:59:59Z&"+"parameterId=temp_mean_past1h"
            try {
                const response = await axios.get(url)
                this.tempData1 = await response.data
                const response2 = await axios.get(url2)
                this.tempData2 = await response2.data
                console.log(this.tempData1, this.tempData2)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getRegnData() {
            const current = new Date();
            const url = "https://dmigw.govcloud.dk/v2/metObs/collections/observation/items?api-key=9c03456a-00ce-48db-a13b-907255c2eb73&stationId=06184&" + `datetime=${current.getFullYear()}`+"-"+`${this.monthDate-1}`+"-"+`${this.beforeDate}`+"T00:00:00Z/"+`${current.getFullYear()}`+"-"+`${this.monthDate}`+"-"+`${this.dayDate}`+"T00:00:00Z&"+"parameterId=precip_past1h"
            try {
                const response = await axios.get(url)
                this.regnData = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getVindData() {
            const current = new Date();
            const url = "https://dmigw.govcloud.dk/v2/metObs/collections/observation/items?api-key=9c03456a-00ce-48db-a13b-907255c2eb73&stationId=06184&" + `datetime=${current.getFullYear()}`+"-"+`${this.monthDate-1}`+"-"+`${this.beforeDate}`+"T00:00:00Z/"+`${current.getFullYear()}`+"-"+`${this.monthDate}`+"-"+`${this.dayDate}`+"T00:00:00Z&"+"parameterId=wind_speed"
            try {
                const response = await axios.get(url)
                this.vindData = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
}).mount("#app")