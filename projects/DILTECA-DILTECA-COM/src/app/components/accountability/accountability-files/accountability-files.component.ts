import { Component, OnInit } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-accountability-files',
  templateUrl: './accountability-files.component.html',
  styleUrls: ['./accountability-files.component.scss']
})
export class AccountabilityFilesComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title =  '';
  public routineName = "AccountabilityFiles";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"accountability_files.accountability_files.component_title","Files Uploqding");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
}
public ngAfterViewInit() {
  this.starServices.setRTL();
 }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );
    //	this.pre_form();
	//this.when_window_activated();
	//this.when_new_form_instance();
 
  }

}
