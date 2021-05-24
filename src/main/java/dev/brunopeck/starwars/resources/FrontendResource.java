package dev.brunopeck.starwars.resources;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/frontend-config")
public class FrontendResource {

	@Value("classpath:static/importmap.json")
	private Resource resource;

	@GetMapping("/importmap")
	public ResponseEntity<Resource> fetchImportMap() {
		return ResponseEntity.ok(resource);
	}

}
