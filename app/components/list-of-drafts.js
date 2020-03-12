import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
import { action } from "@ember/object";
import Checkbox from '@ember/component/checkbox';

export default class ListOfDraftsComponent extends Component {
    @tracked drafts;
    @tracked MyTitle;
    @tracked checked;
    @tracked AddMission;
    @tracked missionstate;
    @tracked missionstateIcon;

    @tracked Fetch_url = "http://localhost:8000/select/";
    @tracked Del_url = "http://localhost:8000/deleter/";
    @tracked Updater_url = "http://localhost:8000/update/";
    @tracked AddMission_url = "http://localhost:8000/add/";


    constructor() {
        super(...arguments);
        this.showrecords();
        //-------------------------------
        this.AddMission = "הוסף משימה"
        this.MyTitle = "משימות";
        this.checked = "checked";
        this.missionstate = "dn";
        this.missionstateIcon = "add.jpg";
    }



    @action
    handlerChecked(id) {

        fetch(this.Updater_url + id).then(data => {
            data.json().then((d) => { })
        });
        this.showrecords();


    }

    @action
    MissionForm() {
        if (this.missionstate == "") {
            this.missionstate = "dn"
            this.missionstateIcon = "add.jpg"
        }
        else {
            this.missionstate = "";
            this.missionstateIcon = "rem.jpg"
        }
    }

    @action
    DeleteMe(id) {
        fetch(this.Del_url + id).then(data => {
            data.json().then((d) => { })
        });
        this.showrecords();
    }


    @action
    HandleSubmit() {
        // alert(this.newmission);
        fetch(this.AddMission_url + this.newmission).then(data => {
            data.json().then((d) => { })
        });
        this.showrecords();
        this.missionstate = "dn"
        this.missionstateIcon = "add.jpg"

    }




    showrecords() {

        fetch(this.Fetch_url).then(data => {


            data.json().then((d) => {
                console.log(d);
                this.drafts = d;
            })

            console.log(this.drafts);

        });
    }



}
