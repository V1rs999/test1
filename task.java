package org.example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.time.DayOfWeek;


public class CalculationClass
{
    private double x;
    private double a;
    private double b;



    public void setInitialValues(double x, double a, double b) {
        this.x = x;
        this.a = a;
        this.b = b;

    }

    public void printInputValues() {
        System.out.println("Input values:");
        System.out.println("x = " + x);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }

    public double calculateY() {
        return b*Math.pow(Math.tan(x),2)-(a/Math.pow(Math.sin(x/a),2));
    }

    public double calculateD() {
        return a*Math.pow(2.71828,-Math.sqrt(a))*Math.cos(b*x/a);
    }

    public void printResults() {
        System.out.println("Results:");
        System.out.println("Y = " + calculateY());
        System.out.println("D = " + calculateD());
    }
    public void printMonthDayYearweekday() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        System.out.println("Current date and time: " + now.format(formatter));
    }

    public static void main(String[] args) {
        CalculationClass calculator = new CalculationClass();
        calculator.setInitialValues(-4.8, 3.2, 17.5);
        calculator.printInputValues();
        calculator.printResults();
        calculator.printMonthDayYearweekday();
        
    }
}