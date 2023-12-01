//
//  ReservationForm.swift
//  Little Lemon Demo
//
//  Created by AliReza on 2023-11-30.
//

import SwiftUI

struct ReservationForm: View {
    @State var customerName: String = ""
    var body: some View {
        Form {
            TextField("Type Your Name", text: $customerName) { state in
                print("Editing changed? \(state).")
            }.onChange(of: customerName, perform: { newValue in
                print("new value is \(newValue).")
            }).onSubmit {
                print("Submitted.")
            }
        }
        .padding()
    }
}

#Preview {
    ReservationForm()
}
