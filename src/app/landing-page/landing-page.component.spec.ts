import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// });
it('should open the modal when logIncome is called', () => {
  component.logIncome();
  expect(component.isModalOpen).toBeTrue();
  expect(component.modalTitle).toBe('Log Income');
});

it('should open the modal when logExpense is called', () => {
  component.logExpense();
  expect(component.isModalOpen).toBeTrue();
  expect(component.modalTitle).toBe('Log Expense');
});

it('should close the modal when closeModal is called', () => {
  component.closeModal();
  expect(component.isModalOpen).toBeFalse();
});

it('should save income and update totals correctly', () => {
  component.entry = { type: '', amount: 100, description: 'Test Income' };
  component.saveIncome();
  expect(component.totalIncome).toBe(100);
  expect(component.totalBalance).toBe(100);
  expect(component.entries.length).toBe(1);
  expect(component.entries[0].type).toBe('Income');
});

it('should save expense and update totals correctly', () => {
  component.entry = { type: '', amount: 50, description: 'Test Expense' };
  component.saveExpense();
  expect(component.totalExpense).toBe(50);
  expect(component.totalBalance).toBe(-50);
  expect(component.entries.length).toBe(1);
  expect(component.entries[0].type).toBe('Expense');
});

it('should update chart data when saveIncome is called', () => {
  component.entry = { type: '', amount: 100, description: 'Test Income' };
  component.saveIncome();
  expect(component.pieChartData.datasets[0].data).toEqual([100, 0]);
});

it('should update chart data when saveExpense is called', () => {
  component.entry = { type: '', amount: 50, description: 'Test Expense' };
  component.saveExpense();
  expect(component.pieChartData.datasets[0].data).toEqual([0, 50]);
});
it('should open the modal when logIncome is called', () => {
  component.logIncome();
  expect(component.isModalOpen).toBeTrue();
  expect(component.modalTitle).toBe('Log Income');
});

it('should open the modal when logExpense is called', () => {
  component.logExpense();
  expect(component.isModalOpen).toBeTrue();
  expect(component.modalTitle).toBe('Log Expense');
});

it('should close the modal when closeModal is called', () => {
  component.closeModal();
  expect(component.isModalOpen).toBeFalse();
});

it('should save income and update totalIncome, totalBalance, and chart data', () => {
  component.entry = { type: '', amount: 100, description: 'Salary' };
  component.saveIncome();
  expect(component.totalIncome).toBe(100);
  expect(component.totalBalance).toBe(100);
  expect(component.pieChartData.datasets[0].data).toEqual([100, 0]);
  expect(component.entries.length).toBe(1);
  expect(component.entries[0].type).toBe('Income');
});

it('should save expense and update totalExpense, totalBalance, and chart data', () => {
  component.entry = { type: '', amount: 50, description: 'Groceries' };
  component.saveExpense();
  expect(component.totalExpense).toBe(50);
  expect(component.totalBalance).toBe(-50);
  expect(component.pieChartData.datasets[0].data).toEqual([0, 50]);
  expect(component.entries.length).toBe(1);
  expect(component.entries[0].type).toBe('Expense');
});

it('should update balance correctly', () => {
  component.totalIncome = 200;
  component.totalExpense = 50;
  component.updateBalance();
  expect(component.totalBalance).toBe(150);
});

it('should update chart data correctly', () => {
  component.totalIncome = 300;
  component.totalExpense = 100;
  component.updateChartData();
  expect(component.pieChartData.datasets[0].data).toEqual([300, 100]);
});
});