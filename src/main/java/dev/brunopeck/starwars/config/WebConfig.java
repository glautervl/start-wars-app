package dev.brunopeck.starwars.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**/*")
			.addResourceLocations("classpath:/public/")
			.resourceChain(false)
			.addTransformer((httpServletRequest, resource, resourceTransformerChain) -> {
				if (resource.exists() && resource.isReadable()) {
					return resource;
				}
				return new ClassPathResource("index.html");
			});
	}
}
