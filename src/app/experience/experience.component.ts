import { Component, OnInit } from '@angular/core';
import { Experience } from '../classes/experience';
import { ExperienceService } from '../services/experiences.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  private year: number;
  private experiences: Experience[];

  constructor(
    private experienceService: ExperienceService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    // gets current year
    this.year = this.sharedDataService.getYear();

    // Gets experiences
    this.experiences = this.experienceService.getExperience();
  }
}
