package dev.brunopeck.starwars.resources;

import dev.brunopeck.starwars.model.PaginatedResponse;
import dev.brunopeck.starwars.model.People;
import dev.brunopeck.starwars.service.PeopleService;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/people")
public class PeopleResource {

	private final PeopleService peopleService;

	public PeopleResource(PeopleService peopleService) {
		this.peopleService = peopleService;
	}

	@GetMapping
	public ResponseEntity<PaginatedResponse<People>> fetchAll() {
		ParameterizedTypeReference<PaginatedResponse<People>> typeReference = new ParameterizedTypeReference<PaginatedResponse<People>>() {};
		PaginatedResponse<People> resp = peopleService.fetchAll(typeReference);
		return ResponseEntity.ok(resp);
	}

	@GetMapping("/{id}")
	public ResponseEntity<People> fetchById(@PathVariable Integer id) {
		People resp = peopleService.fetchById(id);
		return ResponseEntity.ok(resp);
	}
}
