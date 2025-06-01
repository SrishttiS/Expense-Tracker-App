import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  isModalOpen = false;
  entry = {
    type: '',
    amount: 0,
    description: ''
  };
  totalIncome = 0;
  totalExpense = 0;
  totalBalance = 0;
  modalTitle = '';
  entries: { type: string; amount: number | null; description: string }[] = [];

  pieChartLabels: string[] = ['Income', 'Expense'];
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [this.totalIncome, this.totalExpense]
      }
    ]
  };
  pieChartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

  logExpense(): void {
    console.log('Log Expense button clicked');
    this.modalTitle = 'Log Expense';
    this.openModal();
  }

  logIncome(): void {
    console.log('Log Income button clicked');
    this.modalTitle = 'Log Income';
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveIncome() {
    this.entry.type = 'Income';
    this.totalIncome += this.entry.amount!;
    this.updateBalance();
    this.updateChartData();
    console.log('Income saved:', this.entry);
    this.closeModal();
    this.entries.push(this.entry);
    this.entry = { type: '', amount: 0, description: '' };
  }

  saveExpense() {
    this.entry.type = 'Expense';
    this.totalExpense += this.entry.amount!;
    this.updateBalance();
    this.updateChartData();
    console.log('Expense saved:', this.entry);
    this.closeModal();
    this.entries.push(this.entry);
    this.entry = { type: '', amount: 0, description: '' };
  }

  updateBalance() {
    this.totalBalance = this.totalIncome - this.totalExpense;
  }

  updateChartData() {
    this.pieChartData = {
      ...this.pieChartData,
      datasets: [
        {
          data: [this.totalIncome, this.totalExpense]
        }
      ]
    };
  }
}
