package com.atmCardSystem.rest.webservices.restwebservices.atm;

import java.sql.Connection;
import java.sql.DriverManager;

public class jdbcTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String jdbcUrl = "jdbc:mysql://localhost:3306/atm_system";
		String user = "root";
		String pass = "Hector346321";

		try {
			System.out.println("Connecting to database: " + jdbcUrl);

			Connection myConn = DriverManager.getConnection(jdbcUrl, user, pass);

			System.out.println("Connection successful!!!");
			myConn.close();
		} catch (Exception exc) {
			exc.printStackTrace();
		}
	}

}
