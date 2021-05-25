package dev.brunopeck.starwars.resources;

import dev.brunopeck.starwars.model.PaginatedResponse;
import dev.brunopeck.starwars.model.Planet;
import dev.brunopeck.starwars.service.PlanetsService;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/planets")
public class PlanetsResource {

	private final PlanetsService planetsService;

	public PlanetsResource(PlanetsService planetsService) {
		this.planetsService = planetsService;
	}

	@GetMapping
	public ResponseEntity<PaginatedResponse<Planet>> fetchAll() {
		ParameterizedTypeReference<PaginatedResponse<Planet>> typeReference = new ParameterizedTypeReference<PaginatedResponse<Planet>>() {};
		PaginatedResponse<Planet> resp = planetsService.fetchAll(typeReference);
		return ResponseEntity.ok(resp);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Planet> fetchById(@PathVariable Integer id) {
		Planet resp = planetsService.fetchById(id);
		return ResponseEntity.ok(resp);
	}
}
