Реализация с применением angular-material формы регистрации:
 
Login - минимум 3 символа, c проверкой на сервере на доступность путем асинхронного запроса
 
Password: минимум 8 символов, одна большая буква, один спецсимвол. Спецсимвол не должен идти первой буквой
 
Confirm password: должен быть идентичен password
 
Email: должен содержать корректный email
 
При отправке на сервер сервер может в ответе прислать дополнительные ошибки, обработка и отображение их в соответствующих полях формы
 
Форма поддерживает два языка - русский и английский и отображать нужный в зависимости от предпочтений пользователя (window.navigator.languages)