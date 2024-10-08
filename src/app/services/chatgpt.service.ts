import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  // Tu clave de API en environment

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';  // URL de la API
  private apiKey = environment.openAIApiKey;  // API Key desde el archivo de entorno

  constructor(private http: HttpClient) {}

  sendMessageToChatGPT(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openAIApiKey}`  // Clave de API desde environment.ts
    });

    const body = {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
