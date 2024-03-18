import { Component, OnInit } from '@angular/core';
import { StagesService } from '../services/stages.service';
import { Stage } from '../models/stage';

@Component({
  selector: 'app-stage-viewer',
  templateUrl: './stage-viewer.component.html',
  styleUrls: ['./stage-viewer.component.css']
})
export class StageViewerComponent implements OnInit {
  
  constructor(
    private stagesService: StagesService,
  ) { }
    
  stages: Stage[] = [];

  ngOnInit(): void {
    this.getStages();
  }

  getStages() {
    this.stagesService.getStages().subscribe(stages => {
      this.stages = stages;
    });
  }

}
