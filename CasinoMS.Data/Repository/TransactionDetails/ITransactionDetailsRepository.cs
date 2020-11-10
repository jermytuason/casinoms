using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repository.TransactionDetails
{
    public interface ITransactionDetailsRepository
    {
        IEnumerable<TransactionDetailsViewModel> GetAllTransactionDetails();
        TransactionDetailsViewModel GetTransactionDetailsById(Guid transactionId);
        TransactionDetailsViewModel GetTransactionDetailsByReferenceNo(string referenceNo);
        IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByUserId(Guid userId);
        IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByDates(DateTime startDate, DateTime endDate);
        void AddTransactionDetails(TransactionDetailsViewModel model);
        void UpdateTransactionDetails(Guid id);
        void DeleteTransactionDetails(Guid id);
        bool Commit();

    }
}
