/**
 * 72 ONTOLOGICAL SYMBOLS
 * Complete database of EAR ontological system
 *
 * Structure: 4 Dimensions × 3 Attributes × 3 Axes × 2 Polarities = 72 symbols
 */

import type { OntologicalSymbol } from './types'

// ============================================================================
// DIMENSION 1: LINEAR (Lineare)
// Extension along a direction
// ============================================================================

// MODE 1: D1 × A1 (Linear Distinction)
export const SYMBOL_111_PLUS: OntologicalSymbol = {
  id: 'symbol_111_plus',
  notation: 'Σ₁₁₁₊',
  name: 'Incisione',
  position: 1,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Il taglio primario, la prima separazione',
  semanticField: [
    'separare', 'dividere', 'tagliare', 'distinguere', 'isolare',
    'staccare', 'separazione', 'divisione', 'taglio', 'scissione'
  ],
  oppositeSymbol: 'symbol_111_minus',
  complementarySymbols: ['symbol_113_plus', 'symbol_211_plus'],
  conflictualSymbols: ['symbol_111_minus', 'symbol_121_minus'],
  archetypeResonance: {
    'sage': 0.4,
    'ruler': 0.3,
    'hero': 0.2
  }
}

export const SYMBOL_111_MINUS: OntologicalSymbol = {
  id: 'symbol_111_minus',
  notation: 'Σ₁₁₁₋',
  name: 'Continuità',
  position: 2,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Resistenza alla separazione, l\'intero',
  semanticField: [
    'unire', 'intero', 'continuo', 'unità', 'insieme',
    'connesso', 'unione', 'totalità', 'continuità', 'indiviso'
  ],
  oppositeSymbol: 'symbol_111_plus',
  complementarySymbols: ['symbol_121_plus', 'symbol_221_minus'],
  conflictualSymbols: ['symbol_111_plus', 'symbol_211_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'everyman': 0.4,
    'lover': 0.3
  }
}

export const SYMBOL_112_PLUS: OntologicalSymbol = {
  id: 'symbol_112_plus',
  notation: 'Σ₁₁₂₊',
  name: 'Segmentazione',
  position: 3,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Dividere ciò che è già diviso',
  semanticField: [
    'frammentare', 'suddividere', 'analizzare', 'scomporre', 'dettagliare',
    'frammento', 'parte', 'pezzo', 'sezione', 'segmento'
  ],
  oppositeSymbol: 'symbol_112_minus',
  complementarySymbols: ['symbol_111_plus', 'symbol_212_plus'],
  conflictualSymbols: ['symbol_112_minus', 'symbol_122_plus'],
  archetypeResonance: {
    'sage': 0.5,
    'creator': 0.3,
    'ruler': 0.2
  }
}

export const SYMBOL_112_MINUS: OntologicalSymbol = {
  id: 'symbol_112_minus',
  notation: 'Σ₁₁₂₋',
  name: 'Ricomposizione',
  position: 4,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Riunire i frammenti',
  semanticField: [
    'ricomporre', 'riunire', 'integrare', 'sintetizzare', 'fondere',
    'sintesi', 'integrazione', 'fusione', 'unificazione', 'combinazione'
  ],
  oppositeSymbol: 'symbol_112_plus',
  complementarySymbols: ['symbol_111_minus', 'symbol_122_minus'],
  conflictualSymbols: ['symbol_112_plus', 'symbol_212_plus'],
  archetypeResonance: {
    'caregiver': 0.4,
    'magician': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_113_PLUS: OntologicalSymbol = {
  id: 'symbol_113_plus',
  notation: 'Σ₁₁₃₊',
  name: 'Confine',
  position: 5,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Separazione che definisce entrambi i lati',
  semanticField: [
    'confine', 'limite', 'bordo', 'margine', 'frontiera',
    'delimitare', 'definire', 'tracciare', 'demarcazione', 'linea'
  ],
  oppositeSymbol: 'symbol_113_minus',
  complementarySymbols: ['symbol_111_plus', 'symbol_213_plus'],
  conflictualSymbols: ['symbol_113_minus', 'symbol_123_minus'],
  archetypeResonance: {
    'ruler': 0.5,
    'hero': 0.3,
    'sage': 0.2
  }
}

export const SYMBOL_113_MINUS: OntologicalSymbol = {
  id: 'symbol_113_minus',
  notation: 'Σ₁₁₃₋',
  name: 'Soglia',
  position: 6,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Punto dove separazione diventa passaggio',
  semanticField: [
    'soglia', 'passaggio', 'transizione', 'porta', 'varco',
    'attraversare', 'passare', 'oltrepassare', 'transito', 'apertura'
  ],
  oppositeSymbol: 'symbol_113_plus',
  complementarySymbols: ['symbol_123_plus', 'symbol_213_minus'],
  conflictualSymbols: ['symbol_113_plus', 'symbol_211_plus'],
  archetypeResonance: {
    'magician': 0.5,
    'explorer': 0.4,
    'jester': 0.2
  }
}

// MODE 2: D1 × A2 (Linear Relation)
export const SYMBOL_121_PLUS: OntologicalSymbol = {
  id: 'symbol_121_plus',
  notation: 'Σ₁₂₁₊',
  name: 'Concatenazione',
  position: 7,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Legare in serie',
  semanticField: [
    'collegare', 'connettere', 'legare', 'concatenare', 'serie',
    'catena', 'sequenza', 'successione', 'fila', 'ordine'
  ],
  oppositeSymbol: 'symbol_121_minus',
  complementarySymbols: ['symbol_221_plus', 'symbol_131_plus'],
  conflictualSymbols: ['symbol_121_minus', 'symbol_111_plus'],
  archetypeResonance: {
    'sage': 0.4,
    'ruler': 0.4,
    'hero': 0.2
  }
}

export const SYMBOL_121_MINUS: OntologicalSymbol = {
  id: 'symbol_121_minus',
  notation: 'Σ₁₂₁₋',
  name: 'Isolamento',
  position: 8,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Assenza di legame sequenziale',
  semanticField: [
    'isolare', 'sconnettere', 'separato', 'solo', 'isolato',
    'scollegato', 'indipendente', 'autonomo', 'distaccato', 'staccato'
  ],
  oppositeSymbol: 'symbol_121_plus',
  complementarySymbols: ['symbol_111_plus', 'symbol_221_minus'],
  conflictualSymbols: ['symbol_121_plus', 'symbol_221_plus'],
  archetypeResonance: {
    'explorer': 0.5,
    'rebel': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_122_PLUS: OntologicalSymbol = {
  id: 'symbol_122_plus',
  notation: 'Σ₁₂₂₊',
  name: 'Propagazione',
  position: 9,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Legame che si estende',
  semanticField: [
    'propagare', 'diffondere', 'estendere', 'espandere', 'trasmettere',
    'diffusione', 'espansione', 'trasmissione', 'contagio', 'irradiazione'
  ],
  oppositeSymbol: 'symbol_122_minus',
  complementarySymbols: ['symbol_121_plus', 'symbol_222_plus'],
  conflictualSymbols: ['symbol_122_minus', 'symbol_111_plus'],
  archetypeResonance: {
    'everyman': 0.4,
    'lover': 0.4,
    'jester': 0.3
  }
}

export const SYMBOL_122_MINUS: OntologicalSymbol = {
  id: 'symbol_122_minus',
  notation: 'Σ₁₂₂₋',
  name: 'Arresto',
  position: 10,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Legame che non procede',
  semanticField: [
    'fermare', 'bloccare', 'arrestare', 'interrompere', 'stoppare',
    'blocco', 'fermo', 'stasi', 'interruzione', 'stop'
  ],
  oppositeSymbol: 'symbol_122_plus',
  complementarySymbols: ['symbol_121_minus', 'symbol_131_minus'],
  conflictualSymbols: ['symbol_122_plus', 'symbol_131_plus'],
  archetypeResonance: {
    'ruler': 0.4,
    'caregiver': 0.3,
    'innocent': 0.3
  }
}

export const SYMBOL_123_PLUS: OntologicalSymbol = {
  id: 'symbol_123_plus',
  notation: 'Σ₁₂₃₊',
  name: 'Filo',
  position: 11,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Relazione che attraversa mantenendo',
  semanticField: [
    'filo', 'traccia', 'percorso', 'connessione', 'continuità',
    'attraversare', 'mantenere', 'seguire', 'collegamento', 'trama'
  ],
  oppositeSymbol: 'symbol_123_minus',
  complementarySymbols: ['symbol_121_plus', 'symbol_223_plus'],
  conflictualSymbols: ['symbol_123_minus', 'symbol_221_minus'],
  archetypeResonance: {
    'sage': 0.4,
    'magician': 0.4,
    'caregiver': 0.3
  }
}

export const SYMBOL_123_MINUS: OntologicalSymbol = {
  id: 'symbol_123_minus',
  notation: 'Σ₁₂₃₋',
  name: 'Nodo',
  position: 12,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Relazione che ferma per intensificare',
  semanticField: [
    'nodo', 'groviglio', 'intreccio', 'concentrazione', 'punto critico',
    'annodare', 'intrecciare', 'aggrovigliare', 'complicare', 'densità'
  ],
  oppositeSymbol: 'symbol_123_plus',
  complementarySymbols: ['symbol_223_minus', 'symbol_313_minus'],
  conflictualSymbols: ['symbol_123_plus', 'symbol_122_plus'],
  archetypeResonance: {
    'creator': 0.4,
    'rebel': 0.3,
    'jester': 0.3
  }
}

// MODE 3: D1 × A3 (Linear Process)
export const SYMBOL_131_PLUS: OntologicalSymbol = {
  id: 'symbol_131_plus',
  notation: 'Σ₁₃₁₊',
  name: 'Avanzamento',
  position: 13,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Procedere in avanti',
  semanticField: [
    'avanzare', 'procedere', 'andare avanti', 'progredire', 'proseguire',
    'progresso', 'avanzata', 'cammino', 'marcia', 'movimento'
  ],
  oppositeSymbol: 'symbol_131_minus',
  complementarySymbols: ['symbol_121_plus', 'symbol_231_plus'],
  conflictualSymbols: ['symbol_131_minus', 'symbol_122_minus'],
  archetypeResonance: {
    'hero': 0.5,
    'explorer': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_131_MINUS: OntologicalSymbol = {
  id: 'symbol_131_minus',
  notation: 'Σ₁₃₁₋',
  name: 'Regressione',
  position: 14,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Tornare indietro',
  semanticField: [
    'retrocedere', 'tornare indietro', 'regredire', 'arretrare', 'ritorno',
    'regressione', 'ritorno', 'ripiegamento', 'ritirata', 'indietro'
  ],
  oppositeSymbol: 'symbol_131_plus',
  complementarySymbols: ['symbol_431_minus', 'symbol_231_minus'],
  conflictualSymbols: ['symbol_131_plus', 'symbol_231_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.3,
    'everyman': 0.2
  }
}

export const SYMBOL_132_PLUS: OntologicalSymbol = {
  id: 'symbol_132_plus',
  notation: 'Σ₁₃₂₊',
  name: 'Accelerazione',
  position: 15,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Processo che intensifica',
  semanticField: [
    'accelerare', 'intensificare', 'aumentare velocità', 'veloce', 'rapido',
    'accelerazione', 'intensificazione', 'velocità', 'rapidità', 'sprint'
  ],
  oppositeSymbol: 'symbol_132_minus',
  complementarySymbols: ['symbol_131_plus', 'symbol_232_plus'],
  conflictualSymbols: ['symbol_132_minus', 'symbol_122_minus'],
  archetypeResonance: {
    'hero': 0.5,
    'rebel': 0.4,
    'jester': 0.3
  }
}

export const SYMBOL_132_MINUS: OntologicalSymbol = {
  id: 'symbol_132_minus',
  notation: 'Σ₁₃₂₋',
  name: 'Rallentamento',
  position: 16,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Processo che attenua',
  semanticField: [
    'rallentare', 'frenare', 'decelerare', 'diminuire', 'lento',
    'rallentamento', 'decelerazione', 'lentezza', 'calma', 'pausa'
  ],
  oppositeSymbol: 'symbol_132_plus',
  complementarySymbols: ['symbol_122_minus', 'symbol_232_minus'],
  conflictualSymbols: ['symbol_132_plus', 'symbol_131_plus'],
  archetypeResonance: {
    'sage': 0.4,
    'caregiver': 0.4,
    'innocent': 0.3
  }
}

export const SYMBOL_133_PLUS: OntologicalSymbol = {
  id: 'symbol_133_plus',
  notation: 'Σ₁₃₃₊',
  name: 'Traiettoria',
  position: 17,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Percorso che integra i passi',
  semanticField: [
    'traiettoria', 'percorso', 'cammino', 'via', 'direzione',
    'seguire', 'dirigere', 'orientare', 'rotta', 'linea'
  ],
  oppositeSymbol: 'symbol_133_minus',
  complementarySymbols: ['symbol_131_plus', 'symbol_233_plus'],
  conflictualSymbols: ['symbol_133_minus', 'symbol_231_minus'],
  archetypeResonance: {
    'hero': 0.5,
    'explorer': 0.4,
    'sage': 0.3
  }
}

export const SYMBOL_133_MINUS: OntologicalSymbol = {
  id: 'symbol_133_minus',
  notation: 'Σ₁₃₃₋',
  name: 'Deviazione',
  position: 18,
  dimension: 'D1',
  dimensionName: 'Linear',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Uscita dal percorso integrato',
  semanticField: [
    'deviare', 'svoltare', 'divergere', 'sviare', 'cambiare direzione',
    'deviazione', 'svolta', 'divergenza', 'scarto', 'curva'
  ],
  oppositeSymbol: 'symbol_133_plus',
  complementarySymbols: ['symbol_233_minus', 'symbol_113_minus'],
  conflictualSymbols: ['symbol_133_plus', 'symbol_121_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'jester': 0.4,
    'explorer': 0.4
  }
}

// ============================================================================
// DIMENSION 2: PLANAR (Planare)
// Extension on surface
// ============================================================================

// MODE 4: D2 × A1 (Planar Distinction)
export const SYMBOL_211_PLUS: OntologicalSymbol = {
  id: 'symbol_211_plus',
  notation: 'Σ₂₁₁₊',
  name: 'Demarcazione',
  position: 19,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Tracciare confini su superficie',
  semanticField: [
    'demarcare', 'delimitare', 'tracciare', 'mappare', 'area',
    'confine su piano', 'zona', 'regione', 'territorio', 'mappa'
  ],
  oppositeSymbol: 'symbol_211_minus',
  complementarySymbols: ['symbol_111_plus', 'symbol_311_plus'],
  conflictualSymbols: ['symbol_211_minus', 'symbol_221_plus'],
  archetypeResonance: {
    'ruler': 0.5,
    'sage': 0.3,
    'hero': 0.2
  }
}

export const SYMBOL_211_MINUS: OntologicalSymbol = {
  id: 'symbol_211_minus',
  notation: 'Σ₂₁₁₋',
  name: 'Fusione',
  position: 20,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Dissolvere confini superficiali',
  semanticField: [
    'fondere', 'miscelare', 'unificare', 'amalgamare', 'omogeneizzare',
    'fusione', 'mescolanza', 'unificazione', 'amalgama', 'fluido'
  ],
  oppositeSymbol: 'symbol_211_plus',
  complementarySymbols: ['symbol_111_minus', 'symbol_221_minus'],
  conflictualSymbols: ['symbol_211_plus', 'symbol_311_plus'],
  archetypeResonance: {
    'lover': 0.5,
    'magician': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_212_PLUS: OntologicalSymbol = {
  id: 'symbol_212_plus',
  notation: 'Σ₂₁₂₊',
  name: 'Frammentazione',
  position: 21,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Dividere in parti multiple',
  semanticField: [
    'frammentare', 'spezzare', 'rompere', 'separare in pezzi', 'dividere',
    'frammenti', 'pezzi', 'frantumi', 'dispersione', 'rottura'
  ],
  oppositeSymbol: 'symbol_212_minus',
  complementarySymbols: ['symbol_112_plus', 'symbol_312_plus'],
  conflictualSymbols: ['symbol_212_minus', 'symbol_222_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'sage': 0.3,
    'creator': 0.2
  }
}

export const SYMBOL_212_MINUS: OntologicalSymbol = {
  id: 'symbol_212_minus',
  notation: 'Σ₂₁₂₋',
  name: 'Aggregazione',
  position: 22,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Raccogliere frammenti',
  semanticField: [
    'aggregare', 'raccogliere', 'radunare', 'riunire', 'assemblare',
    'aggregazione', 'raccolta', 'raduno', 'assembramento', 'gruppo'
  ],
  oppositeSymbol: 'symbol_212_plus',
  complementarySymbols: ['symbol_112_minus', 'symbol_222_plus'],
  conflictualSymbols: ['symbol_212_plus', 'symbol_211_plus'],
  archetypeResonance: {
    'everyman': 0.5,
    'caregiver': 0.4,
    'ruler': 0.3
  }
}

export const SYMBOL_213_PLUS: OntologicalSymbol = {
  id: 'symbol_213_plus',
  notation: 'Σ₂₁₃₊',
  name: 'Territorio',
  position: 23,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Distinzione che crea appartenenza',
  semanticField: [
    'territorio', 'dominio', 'spazio proprio', 'possesso', 'appartenenza',
    'reclamare', 'occupare', 'possedere', 'proprietà', 'patria'
  ],
  oppositeSymbol: 'symbol_213_minus',
  complementarySymbols: ['symbol_113_plus', 'symbol_313_plus'],
  conflictualSymbols: ['symbol_213_minus', 'symbol_221_plus'],
  archetypeResonance: {
    'ruler': 0.6,
    'hero': 0.3,
    'innocent': 0.2
  }
}

export const SYMBOL_213_MINUS: OntologicalSymbol = {
  id: 'symbol_213_minus',
  notation: 'Σ₂₁₃₋',
  name: 'Transizione',
  position: 24,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Zona dove distinzioni sfumano',
  semanticField: [
    'transizione', 'sfumare', 'gradiente', 'passaggio graduale', 'zona grigia',
    'intermedio', 'sfumatura', 'graduale', 'ambiguità', 'incerto'
  ],
  oppositeSymbol: 'symbol_213_plus',
  complementarySymbols: ['symbol_113_minus', 'symbol_313_minus'],
  conflictualSymbols: ['symbol_213_plus', 'symbol_211_plus'],
  archetypeResonance: {
    'magician': 0.5,
    'jester': 0.4,
    'explorer': 0.3
  }
}

// MODE 5: D2 × A2 (Planar Relation)
export const SYMBOL_221_PLUS: OntologicalSymbol = {
  id: 'symbol_221_plus',
  notation: 'Σ₂₂₁₊',
  name: 'Rete',
  position: 25,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Connessioni che formano rete',
  semanticField: [
    'rete', 'connessione', 'network', 'legami', 'intrecciato',
    'connesso', 'collegato', 'interdipendente', 'trama', 'tessitura'
  ],
  oppositeSymbol: 'symbol_221_minus',
  complementarySymbols: ['symbol_121_plus', 'symbol_321_plus'],
  conflictualSymbols: ['symbol_221_minus', 'symbol_211_plus'],
  archetypeResonance: {
    'everyman': 0.5,
    'caregiver': 0.4,
    'lover': 0.3
  }
}

export const SYMBOL_221_MINUS: OntologicalSymbol = {
  id: 'symbol_221_minus',
  notation: 'Σ₂₂₁₋',
  name: 'Isolamento',
  position: 26,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Rottura connessioni reticolari',
  semanticField: [
    'isolare', 'disconnettere', 'separare dal gruppo', 'escluso', 'tagliato fuori',
    'isolamento', 'disconnessione', 'esclusione', 'solitudine', 'esilio'
  ],
  oppositeSymbol: 'symbol_221_plus',
  complementarySymbols: ['symbol_211_minus', 'symbol_321_minus'],
  conflictualSymbols: ['symbol_221_plus', 'symbol_222_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'explorer': 0.4,
    'sage': 0.3
  }
}

export const SYMBOL_222_PLUS: OntologicalSymbol = {
  id: 'symbol_222_plus',
  notation: 'Σ₂₂₂₊',
  name: 'Sincronizzazione',
  position: 27,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Coordinamento ciclico',
  semanticField: [
    'sincronizzare', 'coordinare', 'allineare', 'armonizzare', 'accordo',
    'sincronia', 'coordinamento', 'armonia', 'ritmo condiviso', 'insieme'
  ],
  oppositeSymbol: 'symbol_222_minus',
  complementarySymbols: ['symbol_221_plus', 'symbol_322_plus'],
  conflictualSymbols: ['symbol_222_minus', 'symbol_212_minus'],
  archetypeResonance: {
    'everyman': 0.5,
    'lover': 0.4,
    'caregiver': 0.3
  }
}

export const SYMBOL_222_MINUS: OntologicalSymbol = {
  id: 'symbol_222_minus',
  notation: 'Σ₂₂₂₋',
  name: 'Dissonanza',
  position: 28,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Perdita di sincronizzazione',
  semanticField: [
    'dissonanza', 'disallineamento', 'sfasato', 'fuori tempo', 'asincrono',
    'desincronizzato', 'discordia', 'disarmonia', 'conflitto', 'contrasto'
  ],
  oppositeSymbol: 'symbol_222_plus',
  complementarySymbols: ['symbol_221_minus', 'symbol_322_minus'],
  conflictualSymbols: ['symbol_222_plus', 'symbol_211_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'jester': 0.4,
    'explorer': 0.3
  }
}

export const SYMBOL_223_PLUS: OntologicalSymbol = {
  id: 'symbol_223_plus',
  notation: 'Σ₂₂₃₊',
  name: 'Comunità',
  position: 29,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Rete integrata come sistema',
  semanticField: [
    'comunità', 'collettivo', 'gruppo', 'insieme', 'unione',
    'appartenenza', 'inclusione', 'integrazione', 'solidarietà', 'coesione'
  ],
  oppositeSymbol: 'symbol_223_minus',
  complementarySymbols: ['symbol_221_plus', 'symbol_323_plus'],
  conflictualSymbols: ['symbol_223_minus', 'symbol_213_minus'],
  archetypeResonance: {
    'everyman': 0.6,
    'caregiver': 0.4,
    'innocent': 0.3
  }
}

export const SYMBOL_223_MINUS: OntologicalSymbol = {
  id: 'symbol_223_minus',
  notation: 'Σ₂₂₃₋',
  name: 'Frammentazione',
  position: 30,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Dissoluzione rete sistemica',
  semanticField: [
    'frammentare', 'disgregare', 'dividere', 'spezzare', 'atomizzare',
    'frammentazione', 'disgregazione', 'divisione', 'rottura', 'dispersione'
  ],
  oppositeSymbol: 'symbol_223_plus',
  complementarySymbols: ['symbol_221_minus', 'symbol_323_minus'],
  conflictualSymbols: ['symbol_223_plus', 'symbol_222_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'magician': 0.4,
    'hero': 0.3
  }
}

// MODE 6: D2 × A3 (Planar Process)
export const SYMBOL_231_PLUS: OntologicalSymbol = {
  id: 'symbol_231_plus',
  notation: 'Σ₂₃₁₊',
  name: 'Rotazione',
  position: 31,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Movimento circolare espansivo',
  semanticField: [
    'ruotare', 'girare', 'circolare', 'rotazione', 'ciclo',
    'tornare', 'ripetere', 'ricorrere', 'spirale', 'circolo'
  ],
  oppositeSymbol: 'symbol_231_minus',
  complementarySymbols: ['symbol_131_plus', 'symbol_331_plus'],
  conflictualSymbols: ['symbol_231_minus', 'symbol_111_plus'],
  archetypeResonance: {
    'magician': 0.5,
    'jester': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_231_MINUS: OntologicalSymbol = {
  id: 'symbol_231_minus',
  notation: 'Σ₂₃₁₋',
  name: 'Stagnazione',
  position: 32,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Movimento che si ferma su piano',
  semanticField: [
    'stagnare', 'fermarsi', 'bloccarsi', 'immobilità', 'inerzia',
    'stagnazione', 'immobilismo', 'paralisi', 'blocco', 'fermo'
  ],
  oppositeSymbol: 'symbol_231_plus',
  complementarySymbols: ['symbol_131_minus', 'symbol_331_minus'],
  conflictualSymbols: ['symbol_231_plus', 'symbol_232_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_232_PLUS: OntologicalSymbol = {
  id: 'symbol_232_plus',
  notation: 'Σ₂₃₂₊',
  name: 'Oscillazione',
  position: 33,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Alternanza ritmica',
  semanticField: [
    'oscillare', 'alternare', 'fluttuare', 'ondeggiare', 'pendolare',
    'oscillazione', 'alternanza', 'fluttuazione', 'onda', 'ritmo'
  ],
  oppositeSymbol: 'symbol_232_minus',
  complementarySymbols: ['symbol_231_plus', 'symbol_332_plus'],
  conflictualSymbols: ['symbol_232_minus', 'symbol_132_minus'],
  archetypeResonance: {
    'jester': 0.5,
    'magician': 0.4,
    'explorer': 0.3
  }
}

export const SYMBOL_232_MINUS: OntologicalSymbol = {
  id: 'symbol_232_minus',
  notation: 'Σ₂₃₂₋',
  name: 'Fissazione',
  position: 34,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Loop che si chiude su sé stesso',
  semanticField: [
    'fissare', 'ossessionare', 'ripetere', 'loop', 'bloccato',
    'fissazione', 'ossessione', 'compulsione', 'ripetizione', 'circolo vizioso'
  ],
  oppositeSymbol: 'symbol_232_plus',
  complementarySymbols: ['symbol_231_minus', 'symbol_332_minus'],
  conflictualSymbols: ['symbol_232_plus', 'symbol_231_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.4,
    'lover': 0.3
  }
}

export const SYMBOL_233_PLUS: OntologicalSymbol = {
  id: 'symbol_233_plus',
  notation: 'Σ₂₃₃₊',
  name: 'Evoluzione Ciclica',
  position: 35,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Cicli che creano crescita',
  semanticField: [
    'evolvere ciclicamente', 'spirale ascendente', 'iterare', 'migliorare', 'progredire',
    'evoluzione', 'crescita ciclica', 'sviluppo iterativo', 'maturazione', 'raffinamento'
  ],
  oppositeSymbol: 'symbol_233_minus',
  complementarySymbols: ['symbol_231_plus', 'symbol_333_plus'],
  conflictualSymbols: ['symbol_233_minus', 'symbol_133_plus'],
  archetypeResonance: {
    'magician': 0.6,
    'creator': 0.4,
    'sage': 0.3
  }
}

export const SYMBOL_233_MINUS: OntologicalSymbol = {
  id: 'symbol_233_minus',
  notation: 'Σ₂₃₃₋',
  name: 'Degenerazione',
  position: 36,
  dimension: 'D2',
  dimensionName: 'Planar',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Cicli che creano declino',
  semanticField: [
    'degenerare', 'deteriorare', 'peggiorare', 'spirale discendente', 'declino',
    'degenerazione', 'deterioramento', 'decadenza', 'regressione', 'involuzione'
  ],
  oppositeSymbol: 'symbol_233_plus',
  complementarySymbols: ['symbol_231_minus', 'symbol_333_minus'],
  conflictualSymbols: ['symbol_233_plus', 'symbol_232_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'rebel': 0.4,
    'explorer': 0.3
  }
}

// ============================================================================
// DIMENSION 3: VOLUMETRIC (Volumetrica)
// Hierarchical depth and structure
// ============================================================================

// MODE 7: D3 × A1 (Volumetric Distinction)
export const SYMBOL_311_PLUS: OntologicalSymbol = {
  id: 'symbol_311_plus',
  notation: 'Σ₃₁₁₊',
  name: 'Stratificazione',
  position: 37,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Creare livelli distinti',
  semanticField: [
    'stratificare', 'livelli', 'strati', 'piano', 'gerarchia',
    'stratificazione', 'livello', 'strato', 'profondità', 'sopra-sotto'
  ],
  oppositeSymbol: 'symbol_311_minus',
  complementarySymbols: ['symbol_111_plus', 'symbol_411_plus'],
  conflictualSymbols: ['symbol_311_minus', 'symbol_321_plus'],
  archetypeResonance: {
    'ruler': 0.6,
    'sage': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_311_MINUS: OntologicalSymbol = {
  id: 'symbol_311_minus',
  notation: 'Σ₃₁₁₋',
  name: 'Appiattimento',
  position: 38,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Collassare gerarchie',
  semanticField: [
    'appiattire', 'livellare', 'orizzontalizzare', 'pareggiare', 'uniformare',
    'appiattimento', 'livellamento', 'orizzontalità', 'uguaglianza', 'piatto'
  ],
  oppositeSymbol: 'symbol_311_plus',
  complementarySymbols: ['symbol_211_minus', 'symbol_411_minus'],
  conflictualSymbols: ['symbol_311_plus', 'symbol_312_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'everyman': 0.4,
    'jester': 0.3
  }
}

export const SYMBOL_312_PLUS: OntologicalSymbol = {
  id: 'symbol_312_plus',
  notation: 'Σ₃₁₂₊',
  name: 'Categorizzazione',
  position: 39,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Classificare per profondità',
  semanticField: [
    'categorizzare', 'classificare', 'ordinare', 'sistemare', 'tassonomia',
    'categoria', 'classe', 'ordine', 'schema', 'sistema'
  ],
  oppositeSymbol: 'symbol_312_minus',
  complementarySymbols: ['symbol_311_plus', 'symbol_412_plus'],
  conflictualSymbols: ['symbol_312_minus', 'symbol_322_plus'],
  archetypeResonance: {
    'sage': 0.6,
    'ruler': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_312_MINUS: OntologicalSymbol = {
  id: 'symbol_312_minus',
  notation: 'Σ₃₁₂₋',
  name: 'Confusione',
  position: 40,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Perdita di distinzioni strutturali',
  semanticField: [
    'confondere', 'mescolare', 'caos', 'disordine', 'confusione',
    'caos', 'disorganizzazione', 'mescolanza', 'entropia', 'indefinito'
  ],
  oppositeSymbol: 'symbol_312_plus',
  complementarySymbols: ['symbol_311_minus', 'symbol_412_minus'],
  conflictualSymbols: ['symbol_312_plus', 'symbol_311_plus'],
  archetypeResonance: {
    'jester': 0.5,
    'rebel': 0.4,
    'explorer': 0.3
  }
}

export const SYMBOL_313_PLUS: OntologicalSymbol = {
  id: 'symbol_313_plus',
  notation: 'Σ₃₁₃₊',
  name: 'Architettura',
  position: 41,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Struttura organizzata complessa',
  semanticField: [
    'architettura', 'struttura', 'edificio', 'sistema complesso', 'organizzazione',
    'costruire', 'strutturare', 'organizzare', 'design', 'schema'
  ],
  oppositeSymbol: 'symbol_313_minus',
  complementarySymbols: ['symbol_311_plus', 'symbol_413_plus'],
  conflictualSymbols: ['symbol_313_minus', 'symbol_323_minus'],
  archetypeResonance: {
    'ruler': 0.6,
    'creator': 0.5,
    'sage': 0.4
  }
}

export const SYMBOL_313_MINUS: OntologicalSymbol = {
  id: 'symbol_313_minus',
  notation: 'Σ₃₁₃₋',
  name: 'Collasso',
  position: 42,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Cedimento strutturale',
  semanticField: [
    'collassare', 'crollare', 'cedere', 'disintegrare', 'fallimento',
    'collasso', 'crollo', 'cedimento', 'rovina', 'disintegrazione'
  ],
  oppositeSymbol: 'symbol_313_plus',
  complementarySymbols: ['symbol_311_minus', 'symbol_413_minus'],
  conflictualSymbols: ['symbol_313_plus', 'symbol_312_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.4,
    'everyman': 0.3
  }
}

// MODE 8: D3 × A2 (Volumetric Relation)
export const SYMBOL_321_PLUS: OntologicalSymbol = {
  id: 'symbol_321_plus',
  notation: 'Σ₃₂₁₊',
  name: 'Coordinamento',
  position: 43,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Relazioni gerarchiche funzionanti',
  semanticField: [
    'coordinare', 'dirigere', 'governare', 'gestire', 'comando',
    'coordinamento', 'leadership', 'governo', 'gestione', 'controllo'
  ],
  oppositeSymbol: 'symbol_321_minus',
  complementarySymbols: ['symbol_221_plus', 'symbol_421_plus'],
  conflictualSymbols: ['symbol_321_minus', 'symbol_311_minus'],
  archetypeResonance: {
    'ruler': 0.6,
    'hero': 0.4,
    'caregiver': 0.3
  }
}

export const SYMBOL_321_MINUS: OntologicalSymbol = {
  id: 'symbol_321_minus',
  notation: 'Σ₃₂₁₋',
  name: 'Insubordinazione',
  position: 44,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Rottura legami gerarchici',
  semanticField: [
    'ribellarsi', 'disobbedire', 'rifiutare autorità', 'sovvertire', 'anarchia',
    'ribellione', 'insubordinazione', 'disobbedienza', 'rivolta', 'rifiuto'
  ],
  oppositeSymbol: 'symbol_321_plus',
  complementarySymbols: ['symbol_221_minus', 'symbol_421_minus'],
  conflictualSymbols: ['symbol_321_plus', 'symbol_322_plus'],
  archetypeResonance: {
    'rebel': 0.6,
    'explorer': 0.4,
    'jester': 0.3
  }
}

export const SYMBOL_322_PLUS: OntologicalSymbol = {
  id: 'symbol_322_plus',
  notation: 'Σ₃₂₂₊',
  name: 'Interdipendenza',
  position: 45,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Dipendenze reciproche strutturate',
  semanticField: [
    'interdipendente', 'simbiotico', 'mutuo', 'reciproco', 'complementare',
    'interdipendenza', 'simbiosi', 'reciprocità', 'mutualità', 'complementarietà'
  ],
  oppositeSymbol: 'symbol_322_minus',
  complementarySymbols: ['symbol_321_plus', 'symbol_422_plus'],
  conflictualSymbols: ['symbol_322_minus', 'symbol_312_minus'],
  archetypeResonance: {
    'caregiver': 0.5,
    'everyman': 0.4,
    'lover': 0.4
  }
}

export const SYMBOL_322_MINUS: OntologicalSymbol = {
  id: 'symbol_322_minus',
  notation: 'Σ₃₂₂₋',
  name: 'Indipendenza',
  position: 46,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Autonomia strutturale',
  semanticField: [
    'indipendente', 'autonomo', 'autosufficiente', 'separato', 'isolato',
    'indipendenza', 'autonomia', 'autosufficienza', 'separazione', 'isolamento'
  ],
  oppositeSymbol: 'symbol_322_plus',
  complementarySymbols: ['symbol_321_minus', 'symbol_422_minus'],
  conflictualSymbols: ['symbol_322_plus', 'symbol_321_plus'],
  archetypeResonance: {
    'explorer': 0.5,
    'rebel': 0.4,
    'hero': 0.4
  }
}

export const SYMBOL_323_PLUS: OntologicalSymbol = {
  id: 'symbol_323_plus',
  notation: 'Σ₃₂₃₊',
  name: 'Sistema',
  position: 47,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Insieme integrato di relazioni strutturate',
  semanticField: [
    'sistema', 'organismo', 'ecosistema', 'totalità', 'integrazione',
    'sistemico', 'olistico', 'integrato', 'coerente', 'unificato'
  ],
  oppositeSymbol: 'symbol_323_minus',
  complementarySymbols: ['symbol_321_plus', 'symbol_423_plus'],
  conflictualSymbols: ['symbol_323_minus', 'symbol_313_minus'],
  archetypeResonance: {
    'ruler': 0.6,
    'sage': 0.5,
    'creator': 0.4
  }
}

export const SYMBOL_323_MINUS: OntologicalSymbol = {
  id: 'symbol_323_minus',
  notation: 'Σ₃₂₃₋',
  name: 'Frammentazione Strutturale',
  position: 48,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Disgregazione sistemica',
  semanticField: [
    'frammentare sistema', 'disgregare', 'spezzare', 'dissolvere', 'atomizzare',
    'disgregazione', 'frammentazione sistemica', 'dissoluzione', 'caos sistemico', 'breakdown'
  ],
  oppositeSymbol: 'symbol_323_plus',
  complementarySymbols: ['symbol_321_minus', 'symbol_423_minus'],
  conflictualSymbols: ['symbol_323_plus', 'symbol_322_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'magician': 0.4,
    'explorer': 0.3
  }
}

// MODE 9: D3 × A3 (Volumetric Process)
export const SYMBOL_331_PLUS: OntologicalSymbol = {
  id: 'symbol_331_plus',
  notation: 'Σ₃₃₁₊',
  name: 'Costruzione',
  position: 49,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Edificare strutture',
  semanticField: [
    'costruire', 'edificare', 'erigere', 'fondare', 'creare struttura',
    'costruzione', 'edificazione', 'creazione', 'fondazione', 'sviluppo'
  ],
  oppositeSymbol: 'symbol_331_minus',
  complementarySymbols: ['symbol_231_plus', 'symbol_431_plus'],
  conflictualSymbols: ['symbol_331_minus', 'symbol_313_minus'],
  archetypeResonance: {
    'creator': 0.6,
    'ruler': 0.5,
    'hero': 0.4
  }
}

export const SYMBOL_331_MINUS: OntologicalSymbol = {
  id: 'symbol_331_minus',
  notation: 'Σ₃₃₁₋',
  name: 'Demolizione',
  position: 50,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Abbattere strutture',
  semanticField: [
    'demolire', 'abbattere', 'distruggere', 'smantellare', 'rovina',
    'demolizione', 'distruzione', 'abbattimento', 'smantellamento', 'rovina'
  ],
  oppositeSymbol: 'symbol_331_plus',
  complementarySymbols: ['symbol_231_minus', 'symbol_431_minus'],
  conflictualSymbols: ['symbol_331_plus', 'symbol_332_plus'],
  archetypeResonance: {
    'rebel': 0.6,
    'hero': 0.4,
    'magician': 0.3
  }
}

export const SYMBOL_332_PLUS: OntologicalSymbol = {
  id: 'symbol_332_plus',
  notation: 'Σ₃₃₂₊',
  name: 'Manutenzione',
  position: 51,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Preservare strutture nel tempo',
  semanticField: [
    'mantenere', 'curare', 'preservare', 'conservare', 'riparare',
    'manutenzione', 'cura', 'preservazione', 'conservazione', 'ripristino'
  ],
  oppositeSymbol: 'symbol_332_minus',
  complementarySymbols: ['symbol_331_plus', 'symbol_432_plus'],
  conflictualSymbols: ['symbol_332_minus', 'symbol_331_minus'],
  archetypeResonance: {
    'caregiver': 0.6,
    'ruler': 0.4,
    'creator': 0.3
  }
}

export const SYMBOL_332_MINUS: OntologicalSymbol = {
  id: 'symbol_332_minus',
  notation: 'Σ₃₃₂₋',
  name: 'Decadimento',
  position: 52,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Deterioramento strutturale',
  semanticField: [
    'deteriorare', 'decadere', 'degradare', 'corrodere', 'logorarsi',
    'deterioramento', 'decadenza', 'degrado', 'corrosione', 'usura'
  ],
  oppositeSymbol: 'symbol_332_plus',
  complementarySymbols: ['symbol_331_minus', 'symbol_432_minus'],
  conflictualSymbols: ['symbol_332_plus', 'symbol_331_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'sage': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_333_PLUS: OntologicalSymbol = {
  id: 'symbol_333_plus',
  notation: 'Σ₃₃₃₊',
  name: 'Metamorfosi',
  position: 53,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Trasformazione strutturale profonda',
  semanticField: [
    'trasformare', 'metamorfosi', 'rivoluzionare', 'trasfigurare', 'ricreare',
    'trasformazione', 'metamorfosi', 'rivoluzione', 'trasfigurazione', 'rinascita'
  ],
  oppositeSymbol: 'symbol_333_minus',
  complementarySymbols: ['symbol_331_plus', 'symbol_433_plus'],
  conflictualSymbols: ['symbol_333_minus', 'symbol_332_plus'],
  archetypeResonance: {
    'magician': 0.7,
    'creator': 0.5,
    'hero': 0.4
  }
}

export const SYMBOL_333_MINUS: OntologicalSymbol = {
  id: 'symbol_333_minus',
  notation: 'Σ₃₃₃₋',
  name: 'Cristallizzazione',
  position: 54,
  dimension: 'D3',
  dimensionName: 'Volumetric',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Rigidità strutturale permanente',
  semanticField: [
    'cristallizzare', 'irrigidire', 'fossilizzare', 'fissare', 'immobilizzare',
    'cristallizzazione', 'rigidità', 'fossilizzazione', 'immutabilità', 'pietrificazione'
  ],
  oppositeSymbol: 'symbol_333_plus',
  complementarySymbols: ['symbol_331_minus', 'symbol_433_minus'],
  conflictualSymbols: ['symbol_333_plus', 'symbol_332_plus'],
  archetypeResonance: {
    'ruler': 0.5,
    'innocent': 0.4,
    'sage': 0.3
  }
}

// ============================================================================
// DIMENSION 4: TEMPORAL (Temporale)
// Causal evolution and historical depth
// ============================================================================

// MODE 10: D4 × A1 (Temporal Distinction)
export const SYMBOL_411_PLUS: OntologicalSymbol = {
  id: 'symbol_411_plus',
  notation: 'Σ₄₁₁₊',
  name: 'Origine',
  position: 55,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Identificare punto causale primario',
  semanticField: [
    'origine', 'inizio', 'genesi', 'causa prima', 'radice',
    'originare', 'iniziare', 'generare', 'fondare', 'principio'
  ],
  oppositeSymbol: 'symbol_411_minus',
  complementarySymbols: ['symbol_111_plus', 'symbol_311_plus'],
  conflictualSymbols: ['symbol_411_minus', 'symbol_421_plus'],
  archetypeResonance: {
    'sage': 0.6,
    'creator': 0.5,
    'ruler': 0.4
  }
}

export const SYMBOL_411_MINUS: OntologicalSymbol = {
  id: 'symbol_411_minus',
  notation: 'Σ₄₁₁₋',
  name: 'Dissolvenza',
  position: 56,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Perdita di distinzione causale',
  semanticField: [
    'dissolvere', 'obliterare', 'cancellare', 'dimenticare', 'perdere traccia',
    'dissolvenza', 'oblio', 'cancellazione', 'dimenticanza', 'indistinto'
  ],
  oppositeSymbol: 'symbol_411_plus',
  complementarySymbols: ['symbol_311_minus', 'symbol_211_minus'],
  conflictualSymbols: ['symbol_411_plus', 'symbol_412_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'jester': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_412_PLUS: OntologicalSymbol = {
  id: 'symbol_412_plus',
  notation: 'Σ₄₁₂₊',
  name: 'Genealogia',
  position: 57,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Tracciare linee causali',
  semanticField: [
    'genealogia', 'discendenza', 'lignaggio', 'catena causale', 'tracciare',
    'derivare', 'provenire', 'discendere', 'ereditare', 'storia'
  ],
  oppositeSymbol: 'symbol_412_minus',
  complementarySymbols: ['symbol_411_plus', 'symbol_312_plus'],
  conflictualSymbols: ['symbol_412_minus', 'symbol_422_plus'],
  archetypeResonance: {
    'sage': 0.6,
    'ruler': 0.4,
    'caregiver': 0.3
  }
}

export const SYMBOL_412_MINUS: OntologicalSymbol = {
  id: 'symbol_412_minus',
  notation: 'Σ₄₁₂₋',
  name: 'Rottura Storica',
  position: 58,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Interruzione catene causali',
  semanticField: [
    'rompere con il passato', 'discontinuità', 'rottura', 'cesura', 'interruzione',
    'discontinuo', 'interrotto', 'cesura', 'frattura storica', 'taglio'
  ],
  oppositeSymbol: 'symbol_412_plus',
  complementarySymbols: ['symbol_411_minus', 'symbol_312_minus'],
  conflictualSymbols: ['symbol_412_plus', 'symbol_411_plus'],
  archetypeResonance: {
    'rebel': 0.6,
    'magician': 0.5,
    'hero': 0.4
  }
}

export const SYMBOL_413_PLUS: OntologicalSymbol = {
  id: 'symbol_413_plus',
  notation: 'Σ₄₁₃₊',
  name: 'Destino',
  position: 59,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Traiettoria causale necessaria',
  semanticField: [
    'destino', 'fato', 'inevitabile', 'necessario', 'predeterminato',
    'destinato', 'fatale', 'inevitabilità', 'necessità storica', 'teleologia'
  ],
  oppositeSymbol: 'symbol_413_minus',
  complementarySymbols: ['symbol_411_plus', 'symbol_313_plus'],
  conflictualSymbols: ['symbol_413_minus', 'symbol_423_minus'],
  archetypeResonance: {
    'ruler': 0.5,
    'sage': 0.5,
    'magician': 0.4
  }
}

export const SYMBOL_413_MINUS: OntologicalSymbol = {
  id: 'symbol_413_minus',
  notation: 'Σ₄₁₃₋',
  name: 'Contingenza',
  position: 60,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A1',
  attributeName: 'Distinction',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Apertura causale, possibilità',
  semanticField: [
    'contingente', 'possibile', 'alternativo', 'libero', 'aperto',
    'contingenza', 'possibilità', 'libertà', 'alternativa', 'scelta'
  ],
  oppositeSymbol: 'symbol_413_plus',
  complementarySymbols: ['symbol_411_minus', 'symbol_313_minus'],
  conflictualSymbols: ['symbol_413_plus', 'symbol_412_plus'],
  archetypeResonance: {
    'rebel': 0.5,
    'explorer': 0.5,
    'jester': 0.4
  }
}

// MODE 11: D4 × A2 (Temporal Relation)
export const SYMBOL_421_PLUS: OntologicalSymbol = {
  id: 'symbol_421_plus',
  notation: 'Σ₄₂₁₊',
  name: 'Eredità',
  position: 61,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Trasmissione causale attraverso tempo',
  semanticField: [
    'eredità', 'trasmettere', 'passare', 'legacy', 'tradizione',
    'ereditare', 'tramandare', 'preservare', 'continuare', 'tradizionale'
  ],
  oppositeSymbol: 'symbol_421_minus',
  complementarySymbols: ['symbol_321_plus', 'symbol_221_plus'],
  conflictualSymbols: ['symbol_421_minus', 'symbol_411_minus'],
  archetypeResonance: {
    'ruler': 0.6,
    'caregiver': 0.5,
    'sage': 0.4
  }
}

export const SYMBOL_421_MINUS: OntologicalSymbol = {
  id: 'symbol_421_minus',
  notation: 'Σ₄₂₁₋',
  name: 'Oblio',
  position: 62,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Perdita di connessione temporale',
  semanticField: [
    'dimenticare', 'obliare', 'perdere memoria', 'cancellare', 'amnesia',
    'oblio', 'dimenticanza', 'amnesia', 'cancellazione', 'perdita'
  ],
  oppositeSymbol: 'symbol_421_plus',
  complementarySymbols: ['symbol_321_minus', 'symbol_221_minus'],
  conflictualSymbols: ['symbol_421_plus', 'symbol_422_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'jester': 0.4,
    'rebel': 0.3
  }
}

export const SYMBOL_422_PLUS: OntologicalSymbol = {
  id: 'symbol_422_plus',
  notation: 'Σ₄₂₂₊',
  name: 'Risonanza',
  position: 63,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Echi causali che si amplificano',
  semanticField: [
    'risonanza', 'riecheggiare', 'amplificare', 'eco', 'reverberare',
    'risuonare', 'eco temporale', 'riverbero', 'amplificazione', 'feedback'
  ],
  oppositeSymbol: 'symbol_422_minus',
  complementarySymbols: ['symbol_421_plus', 'symbol_322_plus'],
  conflictualSymbols: ['symbol_422_minus', 'symbol_412_minus'],
  archetypeResonance: {
    'magician': 0.6,
    'sage': 0.5,
    'creator': 0.4
  }
}

export const SYMBOL_422_MINUS: OntologicalSymbol = {
  id: 'symbol_422_minus',
  notation: 'Σ₄₂₂₋',
  name: 'Attenuazione',
  position: 64,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Effetti che svaniscono nel tempo',
  semanticField: [
    'attenuare', 'svanire', 'dissolversi', 'affievolire', 'smorzare',
    'attenuazione', 'dissolvenza', 'svanimento', 'smorzamento', 'oblio'
  ],
  oppositeSymbol: 'symbol_422_plus',
  complementarySymbols: ['symbol_421_minus', 'symbol_322_minus'],
  conflictualSymbols: ['symbol_422_plus', 'symbol_421_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_423_PLUS: OntologicalSymbol = {
  id: 'symbol_423_plus',
  notation: 'Σ₄₂₃₊',
  name: 'Karma',
  position: 65,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Rete causale integrata',
  semanticField: [
    'karma', 'conseguenze', 'circolo causale', 'retribuzione', 'raccogliere',
    'causale', 'conseguenziale', 'ciclico', 'retributivo', 'giustizia temporale'
  ],
  oppositeSymbol: 'symbol_423_minus',
  complementarySymbols: ['symbol_421_plus', 'symbol_323_plus'],
  conflictualSymbols: ['symbol_423_minus', 'symbol_413_minus'],
  archetypeResonance: {
    'sage': 0.6,
    'ruler': 0.5,
    'magician': 0.4
  }
}

export const SYMBOL_423_MINUS: OntologicalSymbol = {
  id: 'symbol_423_minus',
  notation: 'Σ₄₂₃₋',
  name: 'Grazia',
  position: 66,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A2',
  attributeName: 'Relation',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Liberazione da catene causali',
  semanticField: [
    'grazia', 'liberazione', 'perdono', 'redenzione', 'nuovo inizio',
    'libero', 'redento', 'perdonato', 'rinnovato', 'ricominciare'
  ],
  oppositeSymbol: 'symbol_423_plus',
  complementarySymbols: ['symbol_421_minus', 'symbol_323_minus'],
  conflictualSymbols: ['symbol_423_plus', 'symbol_422_plus'],
  archetypeResonance: {
    'innocent': 0.6,
    'magician': 0.5,
    'caregiver': 0.4
  }
}

// MODE 12: D4 × A3 (Temporal Process)
export const SYMBOL_431_PLUS: OntologicalSymbol = {
  id: 'symbol_431_plus',
  notation: 'Σ₄₃₁₊',
  name: 'Crescita',
  position: 67,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '+',
  description: 'Sviluppo causale progressivo',
  semanticField: [
    'crescere', 'sviluppare', 'maturare', 'progredire', 'avanzare',
    'crescita', 'sviluppo', 'maturazione', 'progresso', 'evoluzione'
  ],
  oppositeSymbol: 'symbol_431_minus',
  complementarySymbols: ['symbol_331_plus', 'symbol_231_plus'],
  conflictualSymbols: ['symbol_431_minus', 'symbol_421_minus'],
  archetypeResonance: {
    'creator': 0.6,
    'hero': 0.5,
    'magician': 0.4
  }
}

export const SYMBOL_431_MINUS: OntologicalSymbol = {
  id: 'symbol_431_minus',
  notation: 'Σ₄₃₁₋',
  name: 'Regressione',
  position: 68,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X1',
  axisName: 'Foundational',
  polarity: '-',
  description: 'Ritorno a stati precedenti',
  semanticField: [
    'regredire', 'retrocedere', 'tornare indietro', 'involuzione', 'arretrare',
    'regressione', 'retrocessione', 'involuzione', 'declino', 'arretramento'
  ],
  oppositeSymbol: 'symbol_431_plus',
  complementarySymbols: ['symbol_331_minus', 'symbol_231_minus'],
  conflictualSymbols: ['symbol_431_plus', 'symbol_432_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'caregiver': 0.4,
    'everyman': 0.3
  }
}

export const SYMBOL_432_PLUS: OntologicalSymbol = {
  id: 'symbol_432_plus',
  notation: 'Σ₄₃₂₊',
  name: 'Apprendimento',
  position: 69,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '+',
  description: 'Integrazione di esperienze temporali',
  semanticField: [
    'apprendere', 'imparare', 'assimilare', 'integrare esperienza', 'saggezza',
    'apprendimento', 'sapere', 'esperienza', 'saggezza', 'integrazione'
  ],
  oppositeSymbol: 'symbol_432_minus',
  complementarySymbols: ['symbol_431_plus', 'symbol_332_plus'],
  conflictualSymbols: ['symbol_432_minus', 'symbol_431_minus'],
  archetypeResonance: {
    'sage': 0.7,
    'magician': 0.5,
    'ruler': 0.4
  }
}

export const SYMBOL_432_MINUS: OntologicalSymbol = {
  id: 'symbol_432_minus',
  notation: 'Σ₄₃₂₋',
  name: 'Ripetizione Cieca',
  position: 70,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X2',
  axisName: 'Recursive',
  polarity: '-',
  description: 'Ripetere senza apprendere',
  semanticField: [
    'ripetere errori', 'non imparare', 'ostinazione', 'testardaggine', 'compulsione',
    'ripetizione compulsiva', 'ostinazione', 'cecità', 'non apprendere', 'loop'
  ],
  oppositeSymbol: 'symbol_432_plus',
  complementarySymbols: ['symbol_431_minus', 'symbol_332_minus'],
  conflictualSymbols: ['symbol_432_plus', 'symbol_431_plus'],
  archetypeResonance: {
    'innocent': 0.5,
    'rebel': 0.4,
    'hero': 0.3
  }
}

export const SYMBOL_433_PLUS: OntologicalSymbol = {
  id: 'symbol_433_plus',
  notation: 'Σ₄₃₃₊',
  name: 'Trascendenza',
  position: 71,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '+',
  description: 'Superamento causale integrato',
  semanticField: [
    'trascendere', 'superare', 'elevare', 'sublimazione', 'illuminazione',
    'trascendenza', 'superamento', 'elevazione', 'sublimazione', 'illuminazione'
  ],
  oppositeSymbol: 'symbol_433_minus',
  complementarySymbols: ['symbol_431_plus', 'symbol_333_plus'],
  conflictualSymbols: ['symbol_433_minus', 'symbol_432_minus'],
  archetypeResonance: {
    'magician': 0.8,
    'sage': 0.6,
    'creator': 0.5
  }
}

export const SYMBOL_433_MINUS: OntologicalSymbol = {
  id: 'symbol_433_minus',
  notation: 'Σ₄₃₃₋',
  name: 'Immanenza',
  position: 72,
  dimension: 'D4',
  dimensionName: 'Temporal',
  attribute: 'A3',
  attributeName: 'Process',
  axis: 'X3',
  axisName: 'Synthetic',
  polarity: '-',
  description: 'Radicamento nel presente causale',
  semanticField: [
    'immanente', 'radicato', 'presente', 'concreto', 'terreno',
    'immanenza', 'radicamento', 'concretezza', 'presenza', 'terrestre'
  ],
  oppositeSymbol: 'symbol_433_plus',
  complementarySymbols: ['symbol_431_minus', 'symbol_333_minus'],
  conflictualSymbols: ['symbol_433_plus', 'symbol_432_plus'],
  archetypeResonance: {
    'everyman': 0.6,
    'caregiver': 0.5,
    'innocent': 0.4
  }
}

// All 72 symbols exported as a map
export const SYMBOLS_DATABASE: Record<string, OntologicalSymbol> = {
  'symbol_111_plus': SYMBOL_111_PLUS,
  'symbol_111_minus': SYMBOL_111_MINUS,
  'symbol_112_plus': SYMBOL_112_PLUS,
  'symbol_112_minus': SYMBOL_112_MINUS,
  'symbol_113_plus': SYMBOL_113_PLUS,
  'symbol_113_minus': SYMBOL_113_MINUS,
  'symbol_121_plus': SYMBOL_121_PLUS,
  'symbol_121_minus': SYMBOL_121_MINUS,
  'symbol_122_plus': SYMBOL_122_PLUS,
  'symbol_122_minus': SYMBOL_122_MINUS,
  'symbol_123_plus': SYMBOL_123_PLUS,
  'symbol_123_minus': SYMBOL_123_MINUS,
  'symbol_131_plus': SYMBOL_131_PLUS,
  'symbol_131_minus': SYMBOL_131_MINUS,
  'symbol_132_plus': SYMBOL_132_PLUS,
  'symbol_132_minus': SYMBOL_132_MINUS,
  'symbol_133_plus': SYMBOL_133_PLUS,
  'symbol_133_minus': SYMBOL_133_MINUS,
  'symbol_211_plus': SYMBOL_211_PLUS,
  'symbol_211_minus': SYMBOL_211_MINUS,
  'symbol_212_plus': SYMBOL_212_PLUS,
  'symbol_212_minus': SYMBOL_212_MINUS,
  'symbol_213_plus': SYMBOL_213_PLUS,
  'symbol_213_minus': SYMBOL_213_MINUS,
  // D2 Relation & Process
  'symbol_221_plus': SYMBOL_221_PLUS,
  'symbol_221_minus': SYMBOL_221_MINUS,
  'symbol_222_plus': SYMBOL_222_PLUS,
  'symbol_222_minus': SYMBOL_222_MINUS,
  'symbol_223_plus': SYMBOL_223_PLUS,
  'symbol_223_minus': SYMBOL_223_MINUS,
  'symbol_231_plus': SYMBOL_231_PLUS,
  'symbol_231_minus': SYMBOL_231_MINUS,
  'symbol_232_plus': SYMBOL_232_PLUS,
  'symbol_232_minus': SYMBOL_232_MINUS,
  'symbol_233_plus': SYMBOL_233_PLUS,
  'symbol_233_minus': SYMBOL_233_MINUS,
  // D3 Complete
  'symbol_311_plus': SYMBOL_311_PLUS,
  'symbol_311_minus': SYMBOL_311_MINUS,
  'symbol_312_plus': SYMBOL_312_PLUS,
  'symbol_312_minus': SYMBOL_312_MINUS,
  'symbol_313_plus': SYMBOL_313_PLUS,
  'symbol_313_minus': SYMBOL_313_MINUS,
  'symbol_321_plus': SYMBOL_321_PLUS,
  'symbol_321_minus': SYMBOL_321_MINUS,
  'symbol_322_plus': SYMBOL_322_PLUS,
  'symbol_322_minus': SYMBOL_322_MINUS,
  'symbol_323_plus': SYMBOL_323_PLUS,
  'symbol_323_minus': SYMBOL_323_MINUS,
  'symbol_331_plus': SYMBOL_331_PLUS,
  'symbol_331_minus': SYMBOL_331_MINUS,
  'symbol_332_plus': SYMBOL_332_PLUS,
  'symbol_332_minus': SYMBOL_332_MINUS,
  'symbol_333_plus': SYMBOL_333_PLUS,
  'symbol_333_minus': SYMBOL_333_MINUS,
  // D4 Complete
  'symbol_411_plus': SYMBOL_411_PLUS,
  'symbol_411_minus': SYMBOL_411_MINUS,
  'symbol_412_plus': SYMBOL_412_PLUS,
  'symbol_412_minus': SYMBOL_412_MINUS,
  'symbol_413_plus': SYMBOL_413_PLUS,
  'symbol_413_minus': SYMBOL_413_MINUS,
  'symbol_421_plus': SYMBOL_421_PLUS,
  'symbol_421_minus': SYMBOL_421_MINUS,
  'symbol_422_plus': SYMBOL_422_PLUS,
  'symbol_422_minus': SYMBOL_422_MINUS,
  'symbol_423_plus': SYMBOL_423_PLUS,
  'symbol_423_minus': SYMBOL_423_MINUS,
  'symbol_431_plus': SYMBOL_431_PLUS,
  'symbol_431_minus': SYMBOL_431_MINUS,
  'symbol_432_plus': SYMBOL_432_PLUS,
  'symbol_432_minus': SYMBOL_432_MINUS,
  'symbol_433_plus': SYMBOL_433_PLUS,
  'symbol_433_minus': SYMBOL_433_MINUS
}

// Export array of all symbols
export const ALL_SYMBOLS = Object.values(SYMBOLS_DATABASE)
