package dev.brunopeck.starwars.model;

import java.io.Serializable;
import java.util.List;

public class PaginatedResponse<E> implements Serializable {
	private Integer count;
	private String next;
	private String previous;
	private List<E> results;

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getNext() {
		return next;
	}

	public void setNext(String next) {
		this.next = next;
	}

	public String getPrevious() {
		return previous;
	}

	public void setPrevious(String previous) {
		this.previous = previous;
	}

	public List<E> getResults() {
		return results;
	}

	public void setResults(List<E> results) {
		this.results = results;
	}
}
