/**
 * CSCI 1015 Program 7
 * A program to simulate a tennis match
 *
 * @author Domo
 */

import java.util.Scanner;

public class BudrysProgram7
{

public static void main(String[] args)
{
	Scanner keyboard = new Scanner(System.in);
	String choice;

	System.out.println("Welcome to Dom's tennis match simulator");

	do {
	    System.out.println();

	    // Get input from the user
	    System.out.print("Please enter the number of sets needed to win a match: ");
	    int setsToWin = keyboard.nextInt();
	    System.out.print("Please enter the probability of player 1 winning: ");
	    double player1Prob = keyboard.nextDouble();
	    System.out.print("Please enter the probability of player 2 winning: ");
	    double player2Prob = keyboard.nextDouble();

	    // Simulate the match
	    TennisMatch match = new TennisMatch(setsToWin, player1Prob, player2Prob);
	    match.playMatch();

	    // Ask the user if they want to continue
	    System.out.print("Would you like to run another simulation? (Y/N): ");
	    choice = keyboard.next();
	} while (choice.equalsIgnoreCase("Y"));

	System.out.println();
	System.out.println("Thank you for using the tennis match simulator!");
  }
}
