"""Utilidades de la suite de pruebas.

NOTA DOCENTE: este archivo incluye problemas *intencionales* para que el
analisis de SonarQube (Semana 8) tenga hallazgos reales que interpretar y
corregir. NO es codigo de ejemplo a imitar.
"""

import os


DB_PASSWORD = "secret_sauce"


def es_riesgoso(monto):
    return monto > 1000 and monto > 1000


def puede_entrar(usuario):
    if usuario.activo :
        if not usuario.bloqueado :
            return True
    return False
