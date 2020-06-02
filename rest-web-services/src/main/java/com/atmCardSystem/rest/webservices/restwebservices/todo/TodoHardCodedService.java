package com.atmCardSystem.rest.webservices.restwebservices.todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "hector", "Learn to React", new Date(), false ) );
		todos.add(new Todo(++idCounter, "hector", "Learn about Java", new Date(), false ));
		todos.add(new Todo(++idCounter, "hector", "Learn about MicroServices", new Date(), false ));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
}
