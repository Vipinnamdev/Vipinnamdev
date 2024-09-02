/*
 * TASK2---->StudentGradeCalculator
 * Input: Take marks obtained (out of 100) in each subject.
   Calculate Total Marks: Sum up the marks obtained in all subjects.
   Calculate Average Percentage: Divide the total marks by the total number of subjects to get the average percentage.
   Grade Calculation: Assign grades based on the average percentage achieved.
   Display Results: Show the total marks, average percentage, and the corresponding grade to the user
 */


package Task2;
import java.util.Scanner;

public class Studentgradecalculator {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();
        int totalMarks = 0;
        for (int i = 1; i <= numSubjects; i++) {
            System.out.print("Enter a mark in "+ i + " subject: ");
            int marks = scanner.nextInt();
            totalMarks += marks;
        }
        double averagePercentage = (double) totalMarks / numSubjects;
        System.out.println("\nTotal Marks Obtained: " + totalMarks);
        System.out.println("Average Percentage: " + averagePercentage + "%");
        char grade = calculateGrade(averagePercentage);
        System.out.println("Grade: " + grade);
        scanner.close();
	}
	public static char calculateGrade(double averagePercentage) {
        char grade;
        if (averagePercentage >= 90) {
        	grade = 'A';
        }
        else if (averagePercentage >= 80) {
        	grade = 'B';
        }
        else if (averagePercentage >= 70) {
            grade = 'C';
        }
        else if (averagePercentage >= 60) {
        	grade = 'D';
        }
        else if (averagePercentage >= 50) {
        	grade = 'E';
        }
        else {
        	grade = 'F';
        }
        return grade;
        }
    }