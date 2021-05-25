package dev.brunopeck.starwars.service;

import dev.brunopeck.starwars.model.PaginatedResponse;
import dev.brunopeck.starwars.model.Planet;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class PlanetsService {

	private static final String RESOURCE = "planets/";

	@Value("${swapi.host}")
	private String host;

	public <T> PaginatedResponse<T> fetchAll(ParameterizedTypeReference<PaginatedResponse<T>> typeReference) {
		WebClient webClient = WebClient.builder().baseUrl(host).build();
		WebClient.RequestHeadersSpec<?> request = webClient.get().uri(uriBuilder -> uriBuilder.pathSegment(RESOURCE).build());
		return request.retrieve().bodyToMono(typeReference).block();
	}

	public Planet fetchById(Integer id) {
		WebClient webClient = WebClient.builder().baseUrl(host).build();
		WebClient.RequestHeadersSpec<?> request = webClient.get().uri(uriBuilder -> uriBuilder.pathSegment(RESOURCE + id + "/").build());
		return request.retrieve().bodyToMono(Planet.class).block();
	}
}
