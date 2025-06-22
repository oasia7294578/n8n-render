# n8n sur Render.com

Ce repository contient la configuration pour déployer n8n sur Render.com gratuitement.

## 🚀 Déploiement automatique

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 📋 Prérequis

- Compte GitHub
- Compte Render.com (gratuit)

## 🛠️ Configuration

### Variables d'environnement automatiques :
- `N8N_HOST=0.0.0.0`
- `N8N_PORT=10000`
- `N8N_PROTOCOL=https`
- `DB_TYPE=sqlite`

### URL de votre application :
Après déploiement : `https://votre-app-name.onrender.com`

## 🔧 Configuration Telegram

1. Créez un bot avec [@BotFather](https://t.me/botfather)
2. Récupérez votre token
3. Dans n8n, configurez vos credentials Telegram
4. Les webhooks utiliseront automatiquement votre URL Render

## 📊 Limitations gratuites Render

- **750 heures/mois** (≈25 jours)
- **Service dort après 15 min** d'inactivité
- **512 MB RAM**
- **Redémarre automatiquement** à la première requête

## 🔄 Garder le service actif

Utilisez [UptimeRobot](https://uptimerobot.com) pour ping votre app toutes les 5 minutes :
- URL à surveiller : `https://votre-app-name.onrender.com`

## 🐛 Dépannage

### Service qui dort
- Normal avec le plan gratuit
- Se réveille automatiquement à la première requête
- Utilisez UptimeRobot pour éviter cela

### Erreurs de déploiement
- Vérifiez les logs dans Render Dashboard
- Assurez-vous que toutes les variables d'environnement sont définies

## 📚 Documentation

- [n8n Documentation](https://docs.n8n.io/)
- [Render Documentation](https://render.com/docs/)

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs Render
2. Consultez la documentation n8n
3. Créez une issue sur ce repository
