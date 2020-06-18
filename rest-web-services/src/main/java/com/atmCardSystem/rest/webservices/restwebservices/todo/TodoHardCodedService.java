package com.atmCardSystem.rest.webservices.restwebservices.todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "hector", "Learn to AI", new Date(), false ) );
		todos.add(new Todo(++idCounter, "hector", "Learn about Java", new Date(), false ));
		todos.add(new Todo(++idCounter, "hector", "Learn about MicroServices", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId()==0 ) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}

	public Todo findById(long id) {
		
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
	
}
