package dev.brunopeck.starwars.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/frontend-config")
public class FrontendResource {

	@GetMapping("/importmap")
	public ResponseEntity<String> fetchImportMap() {
		return ResponseEntity.ok("{\"imports\": {"
				+ "\"react\": \"https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js\","
				+ "\"react-dom\": \"https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js\","
				+ "\"single-spa\": \"https://cdn.jsdelivr.net/npm/single-spa@5.8.2/lib/system/single-spa.min.js\","
				+ "\"@brunopeck/root-config\": \"/brunopeck-root-config.js\","
				+ "\"@brunopeck/navbar\": \"/navbar/brunopeck-navbar.js\"}"
				+ "}");
	}

}
