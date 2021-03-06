class CampaignService {
    constructor($http, API_URL) {
        'ngInject';

        this._$http = $http;

        this.apiUrl = API_URL;
    }

    /**
     * getCampaigns - gets all campaigns
     */
    getCampaigns() {
        return this._$http.get(`${this.apiUrl}`);
    }

    /**
     * changeStatus - changes status of campaign by id
     * @param {*} id - campaign's id
     * @param {*} isActivate - parameter to check a status
     */
    changeStatus(id, isActivate) {
        let action = isActivate ? 'deactivate' : 'activate';

        return this._$http.post(`${this.apiUrl}/${id}/${action}`);
    }

    /**
     * getCampaignStats - gets stats for specific campaign by id
     * @param {*} id - campaign's id
     */
    getCampaignStats(id) {
        return this._$http.get(`${this.apiUrl}/${id}/stats`);
    }
}

export default CampaignService;
