// Public connection settings only. Never put model-provider credentials here.
window.AvatarLLMConfig = {
  apiBaseUrl: 'https://polite-in-redfish.ngrok-free.app',
  mode: 'real', // 'mock' must match the explicit backend LLM_PROVIDER=mock setting.
  timeoutMs: 185000
};
