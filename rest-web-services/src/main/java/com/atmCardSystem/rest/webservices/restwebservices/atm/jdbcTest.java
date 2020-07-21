package com.atmCardSystem.rest.webservices.restwebservices.atm;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

public class jdbcTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String connString = "jdbc:mysql://localhost:3306/atm_system";

		// SQL Server Credentials
		String user = "root";
		String pass = "Hector346321";

		try {

			// initializing connection
			System.out.println("Finding connection & validating " + connString);
			Connection myConn = DriverManager.getConnection(connString, user, pass);
			System.out.println("Connection successful.. located and connected to " + connString);
			
			// translating dummy data into db server
			PreparedStatement stmt = myConn.prepareStatement("");
			
			

		} catch (Exception exc) {
			exc.printStackTrace();
		}
		
		

	}

}
